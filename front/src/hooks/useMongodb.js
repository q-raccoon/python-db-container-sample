import { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_HOST;

const useMongodb = () => {
  const [data, setData] = useState({data: [], count: 0});

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const url = `${HOST}/mongodb`
    const res = await fetch(url)
    const data = await res.json()
    setData(data);
  }
  
  const addData = async (data) => {

  }

  return {
    data, addData
  }
}

export default useMongodb;