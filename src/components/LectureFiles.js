import React from "react";
import weeks from "../data/weeks";

function LectureFiles({ weekNumber }) {
    // Selected Week
    const week = weeks[weekNumber];

    // Display Demos if exist
    const demos = weeks[weekNumber].Demo;
    const demosList = demos && (
        <div className="filesGroup">
            <h2>Demos</h2>
            <ul>
                {Object.keys(demos).map((key) => (
                    <li><a href={demos[key]}>{key} </a></li>
                ))}
            </ul>
        </div>
    );

    // Display youtube download links
    const youtube = week.video.youtube.ThreeD ? 
        (
            <div>
                <h3>Youtube</h3>
                <ul>
                    <li><a href={week.video.youtube.twoD}>2D</a></li>
                    <li><a href={week.video.youtube.ThreeD}>3D</a></li>
                </ul>
            </div>
        ) 
    : 
        (
            <li><a href={week.video.youtube.twoD}>Youtube</a></li>
        );

    return (
        <div className="week-files">
            <h2 className="week-content-header">Lecture</h2>
            <div className="files">

                <div className="filesGroup">
                    <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}.mp3.download`}>Audio</a></li>
                    <li><a href={`https://cs50.harvard.edu/x/2020/notes/${weekNumber}/`}>Notes</a></li>
                </div>
                {demosList && demosList}

                <div className="filesGroup">
                    <h2>Slides</h2>
                    <ul>
                        <li><a href={week.slides.google_slides}>Google Slide</a></li>
                        <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}.pdf`}>PDF</a></li>
                    </ul>
                </div>

                <div className="filesGroup">
                    <h2>Source Code</h2>
                    <ul>
                        <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}/`}>Index</a></li>
                        <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}.pdf`}>PDF</a></li>
                        <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}.zip`} > Zip</a></li>
                    </ul>
                </div>

                <div className="filesGroup">
                    <h2>Video</h2>
                    <ul>
                        <li><a href={week.video.cs50_player}>CS50 Video player</a></li>
                        <div>
                            <h3>MP4</h3>
                            <ul>
                                <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-360p.mp4.download`}> 360p</a></li>
                                <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-720p.mp4.download`}>720p</a></li>
                                <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-1080p.mp4.download`}>1080p</a></li>
                                <li><a href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-4k.mp4.download`}>4K</a></li>
                            </ul>
                        </div>
                        {youtube}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LectureFiles;
