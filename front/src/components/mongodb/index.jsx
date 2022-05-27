import { useState, useEffect } from 'react';

import useMongodb from '../../hooks/useMongodb';

const Mongodb = (props) => {
  const { data, addData }  = useMongodb();

  console.log(data);
  return (
    <div>
      <h1>Mongodb</h1>
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
