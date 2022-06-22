import {useState} from 'react'
import './App.css';
import arrow from './imgs/arrow.jpg';
import arrow1 from './imgs/arrow1.png';


function App() {
  const [usd, setUsd] = useState();
  const [vnd, setVnd] = useState();

  function handleSubmit_USD(num){
    setUsd(num);
  }

  function handleSubmit_VND(num){
    setVnd(num);
  }

  function handleSubmit1(){
    setVnd(usd*23.227);
  } 

  function handleSubmit2(){
    setUsd(vnd/23.227);
  } 


  return (
    <div className="container">
        <h1 className="titleApp">Convert USD to VND 2</h1>

        <div className='convert'>

          <div className="convert__box">
            <h3 className="currency">USD</h3>
            <input className="convert-input" type="text" value={usd} onChange={e => handleSubmit_USD(e.target.value)} placeholder="Number you want to convert"/>
          </div>

          <div className='convert__switch'>
            <img className='convert__submit' src={arrow} alt="conver from usd to vnd" onClick={handleSubmit1}/>
            <img className='convert__submit' src={arrow1} alt="conver from usd to vnd" onClick={handleSubmit2}/>
          </div>

          <div className="convert__box">
            <h3 className="currency">VND</h3>
            <input className="convert-input" type="text" value={vnd} onChange={e => handleSubmit_VND(e.target.value)} placeholder="Number you want to convert"/>
          </div>

        </div>
    </div>
  );
}

export default App;
