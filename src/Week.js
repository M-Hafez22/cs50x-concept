import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WeekContent from './components/WeekContent'
import { useParams } from 'react-router'

function Week() {
    const {number} = useParams();
    return (
        <div>
            <Header />
            <WeekContent weekNumber = {number} /> 
            <Footer />
        </div>
    )
}

export default Week
