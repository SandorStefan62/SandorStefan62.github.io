import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import smoothscroll from "smoothscroll-polyfill"
import "./App.css"
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  smoothscroll.polyfill();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 100);
  }

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })
    }, 100);
  }

  return (
    <>
      <div className={`flex flex-row ${isMobile ? 'relative' : ''}`}>
        <Sidebar isMobile={isMobile} />
        <div className={`${isMobile ? 'z-1 w-full' : 'w-5/6 absolute z-50 right-0'}`}>
          <Routes>
            <Route
              path="*"
              element={
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={300} classNames="fade">
                    <Routes location={location}>
                      <Route index element={<Home isMobile={isMobile} />} />
                      <Route path="blog" element={<Blog />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="gallery" element={<Gallery isMobile={isMobile} />} />
                    </Routes>
                  </CSSTransition>
                </TransitionGroup>
              }
            />
          </Routes>
        </div>
      </div>
      <div className="w-full h-auto absolute">
        <div className="w-16 h-16 bg-purple_opaque rounded-full fixed z-50 top-4 right-4 flex justify-center items-center">
          <button onClick={scrollToTop}>
            <IoIosArrowUp className="w-10 h-10" />
          </button>
        </div>
        <div className="w-16 h-16 bg-purple_opaque rounded-full fixed z-50 bottom-4 right-4 flex justify-center items-center">
          <button onClick={scrollToBottom}>
            <IoIosArrowDown className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
