
import Cnn from "./components/cnn";
import Mariadb from "./components/mariadb";
import Mongodb from "./components/mongodb";
import Redisdb from './components/redis';

function App() {

  return (
    <div>
      <h1>
        도커 및 쿠버네티스 서비스를 활용한 MlOps 공부
      </h1>

      <h2>1. Prediction Server Area </h2>

      <div>
        <Cnn />
      </div>

      <h2>2. Api Server Area</h2>
      <div style={{display: 'flex'}} >
        <div style={{width: 350}}>
          <Mongodb />
        </div>
        <div style={{width: 350}}>
          <Mariadb />
        </div>
        <div style={{width: 350}}>
          <Redisdb />
        </div>
      </div>
      
    </div>
  );
}

export default App;
