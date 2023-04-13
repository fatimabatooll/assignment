import { useState } from 'react';
import './App.css';
import Goals from './Components/Goals';
import Header from './Components/Header';

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Header setData={setData} data={data}/>
      {data.map((e) => {
        return(
          <Goals title={e.title} info={e.info}/>
        )
      })}
    </div>
  );
}

export default App;
