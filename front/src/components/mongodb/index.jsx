import { useState, useEffect } from 'react';

import useMongodb from '../../hooks/useMongodb';

const Mongodb = (props) => {
  const { data, addData }  = useMongodb();

  return (
    <div>
      <h2>/mongodb</h2>
      <span>mongodb와 연동된 API를 수행합니다.</span>
      <br />
      <br />
      <span>조회 및 추가 기능을 테스트 합니다.</span>
      <br />

      <div>
        {data.data.map((item, index) => (
          <div key={index}>
            [{index}] {item.author}: {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mongodb;
