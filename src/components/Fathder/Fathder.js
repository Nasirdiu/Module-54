import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brothder from '../Brothder/Brothder'
import Sister from '../Sister/Sister'
const Fathder = ({house,ornament}) => {
    return (
        <div>
            <h1>Fathder</h1>
            <p>House:{house}</p>
            <div style={{display:'flex'}}>
            <MySelf house={house} ></MySelf>
            <Brothder house={house}></Brothder> 
            <Sister house={house}></Sister> 
            </div>          
        </div>
    );
};

export default Fathder;