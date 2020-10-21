import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Link} from 'react-router-dom';
import weeks from './data/weeks.json'



function Home() {

    const WeeksList = Object.keys(weeks).map((key, index )=> (
        <li>
            <Link to={`/week/${index}`} > Week {key} - {weeks[index].name}</Link>
        </li>
    ))
    return (
        <div>
            <Header />
            <ul>
                {WeeksList}
            </ul>
            <Footer />
        </div>
    )
}

export default Home
