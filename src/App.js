import React, { useEffect, useState } from 'react';
import Header from './Component/Header';
import Show from './Component/Show';
import FirstT from './Component/FirstT';
import SecondT from './Component/SecondT';
import './App.css';

function App() {
  const [err, setErr] = useState(false);
  const [transport, setTransport] = useState();
  const [modeName ,setModeName] = useState("");
  const [showFetch , setShowFetch] = useState()
  const [eventFirst, setEventFirst] = useState();
  const [eventSecond, setEventSecond] = useState();

  const url = "https://api.tfl.gov.uk/Line/Mode/*";
  const nurl ="https://api.tfl.gov.uk/Line/*/Route"

  useEffect(() =>{
  fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
  .then(res => res.json())
  .then(data => setTransport(data))
  .catch((err) => setErr(err));
  }, []);
  if (!transport) {
    return <img alt="loading" src="https://i.gifer.com/HJkK.gif" />
  }
  
  const handleSelectValue = (e) => {
    let newUrl = url.replace("*",(e.target.value));
    setEventFirst(e.target.value)
    console.log(err);
    fetch(newUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setModeName(data);
    });
  };

  const handleSelect = (e) =>{
    console.log(e.target.value);
    setEventSecond(e.target.value);
    let showLine = nurl.replace("*",(e.target.value));
    console.log(err);
    fetch(showLine)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setShowFetch(data);
    });
    console.log(showLine)
    console.log("secound line ")
  }

  return (
    <div className="App">
      <Header />
      <FirstT data={transport} handleSelectValue={handleSelectValue}/>
          <br/>
      <SecondT modeName={modeName} handleSelect={handleSelect}/>
      <br />
      <Show showFetch={showFetch} eventFirst={eventFirst} eventSecond={eventSecond}/>
    </div>
  );
}

export default App;
