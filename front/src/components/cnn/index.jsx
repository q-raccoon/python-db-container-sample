import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Dropzone from "react-dropzone";
import 'chart.js/auto';

import { MATCH_COLOR, NOT_MATCH_COLOR } from './color';
import useCnn from "../../hooks/useCnn";
import Img from './img';

const Cnn = () => {
  const {
    files, onUploadHandler, handleDrop
  } = useCnn();
  const [matchCnt, setMatchCnt] = useState(0);
  const [notMatchCnt, setNotMatchCnt] = useState(0);
  const [data, setData] = useState({
    labels: ['Match', 'Not Match'],
    datasets: [
      {
        label: 'Attendance for Week 1',
        data: [0, 0],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: [
          MATCH_COLOR,
          NOT_MATCH_COLOR,
        ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }

    ]
  })
  
  useEffect(() => {
    setData(
      {
        labels: ['Match', 'Not Match'],
        datasets: [
          {
            label: 'Attendance for Week 1',
            data: [matchCnt, notMatchCnt],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: [
              MATCH_COLOR,
              NOT_MATCH_COLOR,
            ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
          }
    
        ]
      }
    )
  }, [matchCnt, notMatchCnt])

  const options = {
    plugins: {
      title: {
        display: true,
        text: '예측율',
        color: "#4e4e4e",
        font: {
          size: 34
        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        }
      }
    }
  }
  const onMatch = () => {
    setMatchCnt(prev => prev + 1);
  }

  const onNotMatch = () => {
    setNotMatchCnt(prev => prev + 1)
  }

  return (
    <>
      <span>이미지 분류 모델 테스트를 수행합니다</span>
      <br />
      <span>사용 가능한 이미지는 <a className="underline" href="https://www.cs.toronto.edu/~kriz/cifar.html">여기서</a> 확인가능합니다.</span>
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>이미지 분류기를 돌릴 이미지를 넣어주세요</p>
            <p>10개의 라벨 중에서 예측을 수행합니다.</p>
          </div>
        )}
      </Dropzone>

      <div className="flex justify-around items-center" >
        <div className="overflow-y-scroll p-3 h-500px border">
          <span>이미지 분류 결과 - 업로드 된 이미지 분류 결과를 확인할 수 있습니다.</span>
          {files.map(file => (
            <React.Fragment key={file.name}>
              <Img file={file} onUploadHandler={onUploadHandler} onMatch={onMatch} onNotMatch={onNotMatch} />
            </React.Fragment>
          ))}
        </div>

        <div className="h-500px flex items-center">
          <div>
            <Doughnut data={data} options={options} />
            <div>
              <span style={{color: MATCH_COLOR}}> match: {matchCnt} ({((matchCnt / (matchCnt + notMatchCnt) * 100 || 0)).toFixed(2) || 0}%) </span>
            </div>
            <div>
              <span style={{color: NOT_MATCH_COLOR}}> not Match: {notMatchCnt} ({((notMatchCnt / (matchCnt + notMatchCnt) * 100) || 0 ).toFixed(2) }%) </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cnn;