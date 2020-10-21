import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WeekContent from './components/WeekContent'
import { useParams } from 'react-router'
import weeks from './data/weeks'

function Week() {
    const {number} = useParams();
    const week = weeks[number];
    return (
        <div>
            <Header />
            <WeekContent 
                weekNumber = {number}
                weekName = {week.name}
                youtube_video = {week.youtube_video}
            /> 
            <Footer />
        </div>
    )
}

export default Week
