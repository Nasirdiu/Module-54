import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Spaical = () => {
  const [house, setHouse]= useContext(RingContext);
  return (
    <div>
      <h4>Spaical</h4>
      <p>
        Gift:-<small>{house}</small>
      </p>
     <button onClick={()=>setHouse(house+1)}>Add House</button>
    </div>
  );
};

export default Spaical;
