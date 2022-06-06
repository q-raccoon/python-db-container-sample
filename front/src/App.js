
import Mariadb from "./components/mariadb";
import Mongodb from "./components/mongodb";
import Redisdb from './components/redis';

import Cnn from "./components/cnn";

function App() {

  return (
    <div className="px-10 py-20 bg-gray-900 text-white">
      <h1> 도커 및 쿠버네티스 서비스를 활용한 MlOps 공부 </h1>

      <h2>1. Api Server Area (/api)</h2>

      <div class="-mx-3 lg:flex items-start">
        <div class="px-3 lg:w-1/3">
          <Mongodb />
        </div>
        <div class="px-3 lg:w-1/3">
          <Mariadb />
        </div>
        <div class="px-3 lg:w-1/3">
          <Redisdb />
        </div>
      </div>

      <h2 >2. Prediction Server Area (/Prediction) </h2>

      <div >
        <Cnn />
      </div>
    </div>
  );
}

export default App;
