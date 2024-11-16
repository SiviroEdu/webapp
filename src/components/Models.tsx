import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
    const { scene } = useGLTF("/models/base_basic_pbr.gltf");
    const camera = useThree((state) => {
      return state.camera;
    });
    //   const updateFov = (fov) => {
    //     camera.fov = fov;
    //     camera.updateProjectionMatrix();
    //   };
    return <primitive object={scene} />;
}

export default function Models(){
    return(
        <Canvas className="h-full" camera={{ position: [0, 0, 6], fov: 25 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[0, 3, 3]} />
            <pointLight position={[10, 10, 10]} />
            <mesh scale={[100, 100, 100]} />
            <Model />
            <OrbitControls enableZoom={true} minDistance={3} maxDistance={15} />
        </Canvas>
    )
}