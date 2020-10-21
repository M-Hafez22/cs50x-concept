import React from "react";
import weeks from '../data/weeks'

function LectureFiles({weekNumber, google_slides, cs50_player, youtubeTwoD, youtubeThreeD}) {

    const demos = weeks[weekNumber].Demo;
    const demosList =(
        <li>
            <h2>Demos</h2>
            <ul>
                {Object.keys(demos).map( key => (
                    <li>
                        <a href={demos[key]} >{key} </a>
                    </li>
                ))}
            </ul>
        </li>
    ) 
    console.log(demos);
    const youtube = youtubeThreeD ? 
            <div><h2>Youtube</h2><ul><li><a href={youtubeTwoD}>2D</a></li> <li><a href={youtubeThreeD}>3D</a></li></ul></div> 
        :
            <li><a href={youtubeTwoD}>Youtube</a></li>;

  return (
    <div>
      <li>
        <h2>Lecture</h2>
        <ul>
            
                {demosList && demosList}
        
          <li>
            <a
              href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}.mp3.download`}
            >
              Audio
            </a>
          </li>
          <li>
            <a href={`https://cs50.harvard.edu/x/2020/notes/${weekNumber}/`}>
              Notes
            </a>
          </li>

          <li>
            <h2>Slides</h2>
            <ul>
              <li>
                <a href={google_slides}>Google Slide</a>
              </li>
              <li>
                <a
                  href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}.pdf`}
                >
                  PDF
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h2>Source Code</h2>
            <ul>
              <li>
                <a
                  href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}/`}
                >
                  Index
                </a>
              </li>
              <li>
                <a
                  href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}.pdf`}
                >
                  PDF
                </a>
              </li>
              <li>
                <a
                  href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/src${weekNumber}.zip`}
                >
                  Zip
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Video</h2>
            <ul class="toggleList level-three">
              <li>
                <a href={cs50_player}>CS50 Video player</a>
              </li>
              <li>
                <h2>MP4</h2>
                <ul class="toggleList level-four">
                  <li>
                    <a
                      href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-360p.mp4.download`}
                    >
                      360p
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-720p.mp4.download`}
                    >
                      720p
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-1080p.mp4.download`}
                    >
                      1080p
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://cdn.cs50.net/2019/fall/lectures/${weekNumber}/lecture${weekNumber}-4k.mp4.download`}
                    >
                      4K
                    </a>
                  </li>
                </ul>
              </li>
              {youtube}
            </ul>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default LectureFiles;
