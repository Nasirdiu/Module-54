import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Fathder from "../Fathder/Fathder";
import Uncle from "../Uncle/Uncle";
import Anty from "../Anty/Anty";

export const RingContext = createContext("ring");
/* //context api

//1.call createContext with a default value
2.set a variable of the context with uppercase
3.make sure you export the context to use it in other place
4.wrap you child content using ringContext.provider
5.provide a value
6.to consume the context from child component
7.useContext hook and you will you need to pass the contextName



*/



const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const ornament = "Diamond Ring";
  const handleHouse = () => {
    const houseCount = house + 1;
    setHouse(houseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h4>Grandpa</h4>
        <button onClick={handleHouse}>House Count</button>
        <p>House:{house}</p>
        <div style={{ display: "flex" }}>
          <Fathder house={house} ornament={ornament}></Fathder>
          <Uncle house={house}></Uncle>
          <Anty house={house}></Anty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
