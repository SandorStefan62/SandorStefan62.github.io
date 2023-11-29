import Carousel from "../Carousel/Carousel";
import Table from "../Table/Table";
import YouTubePlayer from "../YoutubePlayer/YoutubePlayer";

function Home({ isMobile }) {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center pt-40 space-y-10">
                <div className="w-2/3">
                    <Carousel className="w-1/2" />
                </div>
                <div className="w-2/3">
                    <Table isMobile={isMobile} className="w-1/2" />
                </div>
                <div className="w-2/3">
                    <YouTubePlayer className="w-1/2" />
                </div>
            </div>
        </>
    )
}

export default Home;