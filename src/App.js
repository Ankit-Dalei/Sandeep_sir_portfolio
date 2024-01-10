import { useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import Nav from './Component/Nav';
import Header from './Component/Header';


function App() {
  useEffect(() => {
    const cursor = document.querySelector('#dot');
    const bcursor = document.querySelector('#dot_back');

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1, // Set scale to 1 for visibility
        duration: 0.2,
        opacity:1,
      });
      gsap.to(bcursor, {
        scale: 1, // Set scale to 1 for visibility
        duration: 0.2,
        opacity:1,
      });
      // console.log("enter")
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0, // Set scale to 0 for invisibility
        opacity:0,
      });
      gsap.to(bcursor, {
        scale: 0, // Set scale to 0 for invisibility
        opacity:0,
      });
      // console.log("leave")
    };

    const handleMousePositionChange = (e) => {
      gsap.to(cursor, {
        x: e.clientX+10,
        y: e.clientY+10,
        duration: 0.2,
      });

      gsap.to(bcursor, {
        x: e.clientX+10,
        y: e.clientY+10,
        duration: 0.2,
      });
    };

    const load =(e)=>{
      gsap.to(cursor, {
        scale:0,
        opacity:0,
      });
      gsap.to(bcursor, {
        scale:0,
        opacity:0,
      });
    }

    window.addEventListener('mousemove', handleMousePositionChange);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('load', load);

    return () => {
      window.removeEventListener('mousemove', handleMousePositionChange);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('load', load);
    };
  }, []);

  return (
    <>
      <div className="dot" id="dot"></div>
      <div className="dot_back" id="dot_back"></div>
      <Nav/>
      <Header/>
    </>
  );
}

export default App;
