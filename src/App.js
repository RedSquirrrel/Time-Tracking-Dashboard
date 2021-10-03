import { useState } from 'react';
import Card from './components/Card';
import './style/Index.css';
import jsonData from './data.json';
const loadData = [...jsonData];
console.log(loadData);

const App = () => {
  const [info, setInfo] = useState(loadData);
  console.log(info);

  return (
    <div>
      {info.map(i => {
        return (
          <div key={i.title}>
            <Card info={i.title} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
