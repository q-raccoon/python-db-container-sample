
import Cnn from "./components/cnn";
import Mariadb from "./components/mariadb";
import Mongodb from "./components/mongodb";
import Redisdb from './components/redis';

function App() {

  return (
    <div>
      <h1> 도커 및 쿠버네티스 서비스를 활용한 MlOps 공부 </h1>

      <h2 >1. Prediction Server Area (/Prediction) </h2>

      <div>
        <Cnn />
      </div>

      <h2>2. Api Server Area (/api)</h2>
      <div className="flex" >
        <div className="w-350px">
          <Mongodb />
        </div>
        <div className="w-350px">
          <Mariadb />
        </div>
        <div className="w-350px">
          <Redisdb />
        </div>
      </div>
      
    </div>
  );
}

export default App;
