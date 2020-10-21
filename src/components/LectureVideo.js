import React from 'react'

function LectureVideo({youtube_video}) {
    return (
        <iframe
            src={youtube_video}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    )
}

export default LectureVideo
