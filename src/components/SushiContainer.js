import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi}) {

  const [sushiId, setSushiId] = useState(0)

  const displaySushis = sushis.slice( sushiId, sushiId + 4 )

  function clickMoreHandler() {
    setSushiId(sushiId + 4)
  }

  return (
    <div className="belt">
      {displaySushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>)}
      <MoreButton clickMoreHandler={clickMoreHandler}/>
    </div>
  );
}

export default SushiContainer;
