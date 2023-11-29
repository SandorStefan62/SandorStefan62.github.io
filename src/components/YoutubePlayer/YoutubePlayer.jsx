import React from 'react';

function YouTubePlayer() {
    return (
        <div className="w-full mx-auto mb-10">
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/YnopHCL1Jk8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubePlayer;