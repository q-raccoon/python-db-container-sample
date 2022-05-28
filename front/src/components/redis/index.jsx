import { useState, useEffect } from 'react';
import useRedis from '../../hooks/useRedis';

const Redis = (props) => {
  const {status, fetchData}= useRedis();

  return (
    <div>
      <h2>Redis - RateLimiter(10회/1분)</h2>
      <p>
        <strong>Status:</strong> {status.toString()} <button onClick={fetchData}>request</button>
      </p>
    </div>
  );
};

export default Redis;
