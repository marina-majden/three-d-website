import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { DirectionalLight } from 'three'

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <OrbitControls enableZoom enablePan enableRotate />
      
    </Canvas>
  )
}
export default App