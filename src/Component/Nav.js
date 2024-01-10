import React, { useEffect } from 'react';
import gsap from 'gsap';

const Nav = () => {
  let navlink = [
    {
      name: "PROJECTS",
      id: "Projects",
      cl: "lies",
    },
    {
      name: <div id="odt"></div>,
      id: "ot1",
    },
    {
      name: "PROCESS",
      id: "Process",
      cl: "lies",
    },
    {
      name: <div id="odt"></div>,
      id: "ot2",
    },
    {
      name: "SANDEEP",
      id: "Sandeep",
      cl: "lies",
    },
    {
      name: <div id="odt"></div>,
      id: "ot3",
    },
    {
      name: "ABOUT",
      id: "About",
      cl: "lies",
    },
    {
      name: <div id="odt"></div>,
      id: "ot4",
    },
    {
      name: "CONTACT",
      id: "Contact",
      cl: "lies",
    },
  ];

  useEffect(() => {
    const cursor = document.querySelector('#dot');
    const divi = document.querySelector('.Nav_main');

    divi.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        css:{
          border:"1px solid #fff",
          backgroundColor:"transparent"
        }
      });
    });

    divi.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        css:{
          border:"0px solid #fff",
          backgroundColor:"#fff"
        }
      });
    });
  }, []);

  let handelclick = () => {
    // Handle click logic here
  };

  return (
    <>
      <div className="Nav_main">
        <ul id="ul" className="ulsnav" type="none">
          {navlink.map(({ name, id, cl }) => {
            return (
              <li className={cl} key={id} id={id} onClick={handelclick}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
