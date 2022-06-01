import { useState, useEffect } from 'react';
import useCnn from "../../hooks/useCnn";

const Cnn = () => {
  const [ img, setImg] = useState('');
  const { file, predict, onUploadHandler, onChangeFile } = useCnn();


  useEffect(() => {
    if (!file) return;
    console.log()
    let reader = new FileReader();
    reader.onloadend = () => {
      console.log()
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file])
  return (
    <>
      <input type="file"  onChange={onChangeFile} />
      <button onClick={onUploadHandler}>업로드</button>
      <div style={{display: 'flex'}}>
        <div style={{minWidth: 300}}>
          <h3>이미지 미리보기</h3>
          {img && <img src={img} alt="이미지 미리보기"></img>}
        </div>
        <div style={{minWidth: 300}}>
          <h3>결과</h3>
          <h5>{JSON.stringify(predict)}</h5>
        </div>
      </div>
    </>
  )
}

export default Cnn;