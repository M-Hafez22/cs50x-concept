import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom';
import weeks from '../data/weeks.json'



function Home() {
    document.title = "CS50x";

    const WeeksList = Object.keys(weeks).map((key, index )=> (
            <Link to={`/week/${index}`} >{weeks[index].name}</Link>
    ))
    return (
        <div>
            <div className="main">
                <Header />
                <ul className="weeks-list">
                    {WeeksList}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home
