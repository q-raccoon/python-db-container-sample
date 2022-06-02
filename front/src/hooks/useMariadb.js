import { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_HOST;

const useMariadb = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const url = `${HOST}/api/mariadb`
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

export default useMariadb;