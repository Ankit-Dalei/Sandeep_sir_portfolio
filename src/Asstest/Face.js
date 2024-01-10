import React from 'react'
import {OrbitControls} from '@react-three/drei'

const Face = () => {
  return (
    <>
     {/* <ambientLight intensity={1}/> */}
    {/* <animateMotion/> */}
    <OrbitControls/>
      <mesh>
        <boxGeometry/>
      </mesh>
        
    </>
  )
}

export default Face