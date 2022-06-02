import { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_PREDICTION_SERVER_HOST;


const useCnn = () => {
  const [ files, setFiles ] = useState([]);

  const onUploadHandler = async (file) => {
    return await fetchData(file);
  }

  const onChangeFile = (e) => {
    setFiles(e.target.files);
  }

  const handleDrop = (didAcceptFiles) => {
    setFiles(didAcceptFiles)
  }

  const fetchData = async (file) => {
    const url = `${HOST}/prediction`
    let formData = new FormData();
    // formData는 파일을 포함할 수 있습니다.
    formData.append('file', file, file.name);

    const res = await fetch(url, {
      method: 'POST',
      redirect: 'follow',
      body: formData
    })
    const data = await res.json()
    console.log(data)
    return data;
  }

  return {
    files, 
    onUploadHandler, onChangeFile, handleDrop
  }
}

export default useCnn;