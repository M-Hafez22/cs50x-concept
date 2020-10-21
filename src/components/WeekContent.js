import React from 'react'

function WeekContent({weekNumber, weekName, youtube_video, google_slides, cs50_player, youtube}) {
    return (
        <div>
            <header>
                <h1>Week {weekNumber} - <span>{weekName}</span></h1>
            </header>

            <iframe
                src={youtube_video}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>

            <div id="week-files">
                <ol  class="level-one">
                    <li>
                        <h2>Lecture</h2>
                        <ul>
                            <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}.mp3.download`}>Audio</a></li>
                           <li><a href={`https://cs50.harvard.edu/x/2020/notes/${weekNumber}/`}>Notes</a></li>
                           
                           <li>
                               <h2>Slides</h2>
                               <ul >
                                   <li><a href={google_slides}>Google Slide</a></li>
                                   <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}.pdf`}>PDF</a></li>
                               </ul>
                           </li>
                           
                            <li>
                                <h2>Source Code</h2>
                                <ul>
                                    <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}/`}>Index</a></li>
                                    <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}.pdf`}>PDF</a></li>
                                    <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}.zip`}>Zip</a></li>
                                </ul>
                            </li>
                           <li>
                               <h2>Video</h2>
                               <ul class="toggleList level-three">
                                    <li><a href={cs50_player}>CS50 Video player</a></li>
                                    <li>
                                        <h2>MP4</h2>
                                        <ul class="toggleList level-four">
                                            <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-360p.mp4.download`}>360p</a></li>
                                            <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-720p.mp4.download`}>720p</a></li>
                                            <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-1080p.mp4.download`}>1080p</a></li>
                                            <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-4k.mp4.download`}>4K</a></li>
                                        </ul>
                                    </li>
                                    <li><a href={youtube}>Youtube</a></li>
                               </ul>
                           </li>
                        </ul>
                    </li>
                    

                    <li><a href={`https://cs50.harvard.edu/x/2020/psets/${weekNumber}/`}>Problem Set {weekNumber}</a></li>
                </ol>
            </div>
        </div>
    )
}

export default WeekContent
