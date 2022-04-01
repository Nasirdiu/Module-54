import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Anty = () => {

    const [house, setHouse]=useContext(RingContext)
    return (
        <div>
           <h1>Anty</h1> 
           <p>House:{house}</p>
           <button onClick={()=>setHouse(house+1)}>Add House</button>
        </div>
    );
};

export default Anty;