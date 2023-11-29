import React from 'react';

function Gallery({ isMobile }) {
    return (
        <div className="w-full h-screen flex flex-col items-center pt-40">
            <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-2 gap-4'} p-10`}>
                <div className={isMobile ? 'flex flex-col space-y-4 items-center' : 'flex flex-col space-y-4'}>
                    <img
                        src="https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg"
                        alt="Placeholder 1"
                        className={`${isMobile ? "w-[200px] h-[200px]" : "w-[400px] h-[400px]"} rounded-2xl`}
                    />
                    <img
                        src="https://wallpapercave.com/wp/wp3386769.jpg"
                        alt="Placeholder 2"
                        className={`${isMobile ? "w-[200px] h-[200px]" : "w-[400px] h-[400px]"} rounded-2xl`}
                    />
                    {isMobile && (
                        <div className="flex flex-col space-y-4">
                            <img
                                src="https://wallpaperaccess.com/full/809523.jpg"
                                alt="Placeholder 3"
                                className={`${isMobile ? "w-[200px] h-[200px]" : "w-[400px] h-[400px]"} rounded-2xl`}
                            />
                            <img
                                src="https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg"
                                alt="Placeholder 4"
                                className={`${isMobile ? "w-[200px] h-[200px]" : "w-[400px] h-[400px]"} rounded-2xl`}
                            />
                        </div>
                    )}
                </div>
                {!isMobile && (
                    <div className="flex flex-col space-y-4">
                        <img
                            src="https://wallpaperaccess.com/full/809523.jpg"
                            alt="Placeholder 3"
                            className="w-[400px] h-[400px] rounded-2xl"
                        />
                        <img
                            src="https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg"
                            alt="Placeholder 4"
                            className="w-[400px] h-[400px] rounded-2xl"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gallery;