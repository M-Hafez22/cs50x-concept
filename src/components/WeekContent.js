import React from 'react'
import weeks from '../data/weeks'
import LectureVideo from './LectureVideo'
import LectureFiles from './LectureFiles'
import Shorts from './Shorts'

function WeekContent({weekNumber}) {
    //Selected Week
    const week = weeks[weekNumber];
    const finalWeek = (Object.keys(weeks).length) - 1 == weekNumber ;
    console.log(weekNumber)
    return (
        <div className="week-content">
            <header>
                <h1>Week {weekNumber} - <span>{week.name}</span></h1>
            </header>
            
            <LectureVideo youtube_video = {week.youtube_video}/>

            <LectureFiles weekNumber ={weekNumber} />

            {  weeks[weekNumber].shorts && <Shorts weekNumber ={weekNumber}/>}


            <div>
                <a 
                    href={`https://cs50.harvard.edu/x/2020/psets/${weekNumber}/`}
                    className='week-content-header'
                    >
                    Problem <span>Set {weekNumber} { finalWeek && " (Choose your Track)"}</span>
                </a>
            </div>
        </div>
    )
}

export default WeekContent
