import React from 'react'
import weeks from '../data/weeks'
import LectureVideo from './LectureVideo'
import LectureFiles from './LectureFiles'

function WeekContent({weekNumber}) {
    // const {weekName, youtube_video, google_slides, cs50_player, youtube}
    const week = weeks[weekNumber];
    return (
        <div>
            <header>
                <h1>Week {weekNumber} - <span>{week.name}</span></h1>
            </header>

            <LectureVideo youtube_video = {week.youtube_video}/>
            <LectureFiles 
                weekNumber ={weekNumber}
                google_slides = {week.google_slides}
                cs50_player = {week.video.cs50_player}
                youtubeTwoD = {week.video.youtube.twoD}
                youtubeThreeD = {week.video.youtube.ThreeD}
            />
{/* 
            <div id="week-files">
                <ol  class="level-one">
                    
                    

                    <li><a href={`https://cs50.harvard.edu/x/2020/psets/${weekNumber}/`}>Problem Set {weekNumber}</a></li>
                </ol>
            </div> */}
        </div>
    )
}

export default WeekContent
