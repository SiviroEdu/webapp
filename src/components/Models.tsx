import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
    const { scene } = useGLTF("/models/base_basic_pbr.gltf");
    scene.position.set(0, 0, 0); // Ensures the model is centered at the origin
    return <primitive object={scene} />;
}

export default function Models({classes}:{classes: string}) {
    return (
        <Canvas className={classes} camera={{ position: [0, 0, 14], fov: 10 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[3, 3, 3]} />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls 
                enableZoom={false} 
                minDistance={3} 
                maxDistance={15} 
                target={[0, 0, 0]} // Focus on the model
                autoRotate={true} // Enable auto-rotation
                autoRotateSpeed={2} // Adjust the speed of rotation
            />
        </Canvas>
    );
}
