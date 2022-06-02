import { useState, useEffect } from 'react';
import useRedis from '../../hooks/useRedis';

const Redis = (props) => {
  const {status, fetchData}= useRedis();

  return (
    <div>
      <h2>/redis</h2>
      <span>1분동안 최대 10번의 요청만 하용하는 API를 테스트합니다.</span>
      <br />
      <br />
      <span>해당 기능은 redis 캐싱기능을 활용하여 구현되어 있습니다.</span>
      <p>
        <strong>Status:</strong> {status.toString()} <button onClick={fetchData}>request</button>
      </p>
    </div>
  );
};

export default Redis;
