import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsList from './components/ItemsList';
import Search from './components/Search';
import Img from './components/Img';
import LoadMore from './components/LoadMore';

function App() {

  const [items, setItems] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [text, setText] = useState('')
  const [number, setNumber] = useState(16)

  useEffect(() => {
    
    const usefetsh = async()=>{

      const result = await axios.get('https://www.breakingbadapi.com/api/characters')
      console.log(result.data)
      setItems(result.data)
      setIsloading(false)
    }
    usefetsh()

  }, [])
  return (
    <div className="App">
      <Img/>
      <Search text={text} setText={setText} />
      <ItemsList number={number} setNumber={setNumber} text={text} items={items} isloading={isloading} />
      <LoadMore items={items} number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
