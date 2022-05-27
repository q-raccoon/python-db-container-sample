
import Mariadb from "./components/mariadb";
import Mongodb from "./components/mongodb";

function App() {

  return (
    <div style={{display: 'flex'}} >
      <Mongodb />
      <Mariadb />
    </div>
  );
}

export default App;
