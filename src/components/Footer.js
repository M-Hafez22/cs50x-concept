import React from 'react'
import footerData from '../data/footerLinks'

function Footer() {
    // Loop through Lists
    const lists = Object.keys(footerData).map(key => (
        <ul key={key} className="footerGroup">
            {   
                //Loop inside every list       
                (footerData[key].map(i => (
                    <li><a key={i.name} href={i.link}>{i.name}</a></li>
                )))
            }

        </ul>
    ))

    return (
        <footer>
            {lists}
        </footer>
    )
}

export default Footer
