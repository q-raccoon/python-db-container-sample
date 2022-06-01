import { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_PREDICTION_SERVER_HOST;


const useCnn = () => {
  const [ file, setFile ] = useState(null);
  const [predict, setPredict] = useState(null);

  const onUploadHandler = () => {
    fetchData()
  }

  const onChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const fetchData = async () => {
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
    setPredict(data);
  }

  return {
    file, predict, 
    onUploadHandler, onChangeFile, 
  }
}

export default useCnn;