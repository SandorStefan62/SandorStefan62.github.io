import { useState } from "react";
import { Outlet, Link } from "react-router-dom"

function Navbar() {
    const [isActiveHome, setIsActiveHome] = useState(false);
    const [isActiveBlog, setIsActiveBlog] = useState(false);
    const [isActiveContact, setIsActiveContact] = useState(false);
    const [isActiveGallery, setIsActiveGallery] = useState(false);

    const handleHomeClick = () => {
        setIsActiveHome(!isActiveHome);
        setIsActiveBlog(false);
        setIsActiveGallery(false);
        setIsActiveContact(false);
    }

    const handleBlogClick = () => {
        setIsActiveBlog(!isActiveBlog);
        setIsActiveHome(false);
        setIsActiveGallery(false);
        setIsActiveContact(false);
    }

    const handleGalleryClick = () => {
        setIsActiveGallery(!isActiveGallery);
        setIsActiveHome(false);
        setIsActiveBlog(false);
        setIsActiveContact(false);
    }

    const handleContactClick = () => {
        setIsActiveContact(!isActiveContact);
        setIsActiveHome(false);
        setIsActiveBlog(false);
        setIsActiveGallery(false);
    }

    return (
        <div className="h-screen relative overflow-hidden">
            <div className="w-full h-40 bg-black absolute">
                <img
                    className="w-full h-full object-cover"
                    src="/image-removebg.png"
                    alt="Background"
                />
            </div>
            <nav className="w-full h-screen flex flex-col justify-center">
                <ul className="flex flex-col items-center space-y-4">
                    <li className="w-full">
                        <Link className="w-full flex justify-center" to="/">
                            <button className={`w-2/3 px-4 py-2 text-3xl rounded-lg transition duration-300 text-white ${isActiveHome ? "bg-dark_purple text-yellow" : "hover:bg-dark_purple hover:text-yellow"}`} onClick={handleHomeClick}>
                                Home
                            </button>
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link className="w-full flex justify-center" to="/blog">
                            <button className={`w-2/3 px-4 py-2 text-3xl rounded-lg transition duration-300 text-white ${isActiveBlog ? "bg-dark_purple text-yellow" : "hover:bg-dark_purple hover:text-yellow"}`} onClick={handleBlogClick}>
                                Blog
                            </button>
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link className="w-full flex justify-center" to="/gallery">
                            <button className={`w-2/3 px-4 py-2 text-3xl rounded-lg transition duration-300 text-white ${isActiveGallery ? "bg-dark_purple text-yellow" : "hover:bg-dark_purple hover:text-yellow"}`} onClick={handleGalleryClick}>
                                Gallery
                            </button>
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link className="w-full flex justify-center" to="/contact">
                            <button className={`w-2/3 px-4 py-2 text-3xl rounded-lg transition duration-300 text-white ${isActiveContact ? "bg-dark_purple text-yellow" : "hover:bg-dark_purple hover:text-yellow"}`} onClick={handleContactClick}>
                                Contact
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-full h-full bg-blue-300">
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar;