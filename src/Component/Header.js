import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import img from '../Image/imis.png'

const Header = () => {
  const [intitialName] = useState("GAME DESIGNER");

  return (
    <>
      <div className="header">
        {/* Uncomment the image import and usage if needed */}
        {/* <img src={img} alt="" /> */}
        <div className="header_left">
          <div className='header_left_center'>
            <h1 className='intro'>Hi I AM <span className='introspan'>SANDEEP</span> </h1>
            <em className='Naming'>{intitialName}</em>
            <div className='bigline'></div>
            <div className='smallline'></div>
            <div className='rounder'>
              <div className='innerrounder'> S </div>
            </div>
            <p className='tetx'>
              I work to create solutions that
              Solve problems, connect people and bring ideas to life.
            </p>
          </div>
        </div>
        <div className="header_right">
          {/* <Canvas>
            <OrbitControls />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshNormalMaterial />
            </mesh>
          </Canvas> */}
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
