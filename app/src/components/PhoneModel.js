import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../assets/3D-Model/Scene.jsx'
import { Suspense } from 'react'

const Container = styled.div`
width: 500px;
height: 1000px;

position: relative;
top: 0;
z-index: 1;
background-color: transparent;
`

const PhoneModel = () => {
    return (
        <Container>
            <Canvas camera={{fov: 60}}>
                <ambientLight intensity={0.7}/>
                <directionalLight intensity={1.3}/>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </Container>
    )
}

export default PhoneModel;