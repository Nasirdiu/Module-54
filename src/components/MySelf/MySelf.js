import React from 'react';
import Spaical from '../Spaical/Spaical';

const MySelf = ({house}) => {
    return (
        <div>
            <h1>MySelf</h1>
            <p><span>Home:{house}</span></p>
            <Spaical></Spaical>
        </div>
    );
};

export default MySelf;