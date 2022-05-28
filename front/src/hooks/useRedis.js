import { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_HOST;

const useRedis = () => {
  const [ status, setStatus ] = useState(true);

  const fetchData = async () => {
    const url = `${HOST}/redis/resources`
    try {
      const { ok } = await fetch(url);
      setStatus(ok);
    } catch(err) {
      setStatus(false);
    }
  }

  return {
    status, fetchData
  }
}

export default useRedis;