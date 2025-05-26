import { Canvas } from '@react-three/fiber'
import { Html, useFrame, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function LogoBox() {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={ref} rotation={[0, 0, 0]}>
      <planeBufferGeometry args={[2, 2]} />
      <meshBasicMaterial transparent>
        <Html center>
          <img
            src="/logo.png"
            alt="Softwork Solutions Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Html>
      </meshBasicMaterial>
    </mesh>
  )
}

export default function App() {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Softwork Solutions
      </motion.h1>

      <Canvas className="h-64 w-64">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <LogoBox />
        <OrbitControls />
      </Canvas>

      <motion.p
        className="mt-6 text-gray-700"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Empowering Businesses with Smart Tech.
      </motion.p>
    </div>
  )
}