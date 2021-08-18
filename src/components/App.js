import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json'
}

function App() {

  const [sushis, setSushis] = useState([])
  const [eaten, setEaten] = useState(false)
  const [money, setMoney] = useState("100")

  useEffect(() => (
    fetch(API)
    .then(resp => resp.json()
    .then(data => setSushis(data)))
  ), [])

  function eatSushi() {
    setEaten(!eaten)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table mpney={money}/>
    </div>
  );
}

export default App;
