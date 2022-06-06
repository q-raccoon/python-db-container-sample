import { useState, useEffect } from 'react';

const HOST = process.env.REACT_APP_HOST;

const useRedis = () => {
  const [ histories, setHistories ] = useState([]);

  const fetchData = async () => {
    const url = `${HOST}/api/redis/resources`
    try {
      const { ok } = await fetch(url);
      addHistory(ok);
    } catch(err) {
      addHistory(false);
    }
  }

  const addHistory = (status) => {
    setHistories(histories => [...histories, {
      status,
      host: '127.0.0.1',
      date: (new Date()).toLocaleDateString()
    }]);
  }

  return {
    histories, fetchData
  }
}

export default useRedis;