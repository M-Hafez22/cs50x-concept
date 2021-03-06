import React from 'react'
import weeks from "../data/weeks"

function Shorts({ weekNumber }) {


    const shorts = weeks[weekNumber].shorts;
    const shortsList = shorts && 
    (
            <ul className="shorts-list">
                {Object.keys(shorts).map((key) => (
                    <li><a href={shorts[key]}>{key}</a></li>
                ))}
            </ul>   
    );
    return (
        <div className="shorts">
            <h2>Shorts</h2>
            {shortsList}
        </div>
    )
}

export default Shorts
