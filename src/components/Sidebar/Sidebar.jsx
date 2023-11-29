import Navbar from "../Navbar/Navbar";
import "./Sidebar.css"
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Sidebar({ isMobile }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!isMobile) {
            setShowMenu(true);
        }
    })

    return (
        <div className={`fixed top-0 left-0 z-50 ${isMobile ? `w-5/6 ${showMenu ? '' : 'pointer-events-none'}` : `w-1/6`}`}>
            <div className={`h-auto ${showMenu ? ` ${isMobile ? '' : 'bg-purple_opaque animate-slideInFromLeft'}` : 'bg-transparent'}`}>
                {isMobile && <div className={`bg-purple_transparent absolute z-0 top-0 left-0 h-full w-full pointer-events-none ${showMenu ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'}`}></div>}
                <div className="md:hidden mt-5 ml-5">
                    <button onClick={toggleMenu} className={`button ${showMenu ? '' : 'pointer-events-auto'}`}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                <div className={`${showMenu ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'}`}>
                    <Navbar showMenu={showMenu} />
                </div>
                <div className={`${showMenu ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'} w-full h-40 absolute bottom-0 flex justify-center`}>
                    <a href="https://www.facebook.com" className="p-3">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com" className="p-3">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" className="p-3">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            <style>
                {`
                    .animate-slideInFromLeft {
                        animation: slideInFromLeft 0.5s ease-in-out forwards;
                    }
                    .animate-slideOutToLeft {
                        animation: slideOutToLeft 0.5s ease-in-out forwards;
                    }
                `}
            </style>
        </div>
    )
}

export default Sidebar;