
import Mariadb from "./components/mariadb";
import Mongodb from "./components/mongodb";
import Redisdb from './components/redis';

function App() {

  return (
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
  );
}

export default App;
