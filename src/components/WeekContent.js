import React from 'react'
import weeks from '../data/weeks'
import LectureVideo from './LectureVideo'
import LectureFiles from './LectureFiles'
import Shorts from './Shorts'

function WeekContent({weekNumber}) {
    //Selected Week
    const week = weeks[weekNumber];
    return (
        <div>
            <header>
                <h1>Week {weekNumber} - <span>{week.name}</span></h1>
            </header>

            <LectureVideo youtube_video = {week.youtube_video}/>
            <LectureFiles weekNumber ={weekNumber} />
            <Shorts weekNumber ={weekNumber}/>

            <li><a href={`https://cs50.harvard.edu/x/2020/psets/${weekNumber}/`}>Problem Set {weekNumber}</a></li>

        </div>
    )
}

export default WeekContent
