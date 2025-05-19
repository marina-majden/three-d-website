import React from "react";
import { useGLTF } from "@react-three/drei";


function Pheonix() {
    const model = useGLTF('/models/rhetorician/scene.gltf')

    return (
        <primitive object={model.scene} />
    )
}

export default Pheonix