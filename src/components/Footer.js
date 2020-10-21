import React from 'react'
import footerData from '../data/footerLinks'

function Footer() {
    // Loop through Lists
    const lists = Object.keys(footerData).map(key => (
        <ul key={key}>
            {   
                //Loop inside every list       
                (footerData[key].map(i => (
                    <li><a key={i.name} href={i.link}>{i.name}</a></li>
                )))
            }
            {/* Add seperator between  lists */}
            <hr></hr>
        </ul>
    ))

    return (
        <div>
            {lists}
        </div>
    )
}

export default Footer
