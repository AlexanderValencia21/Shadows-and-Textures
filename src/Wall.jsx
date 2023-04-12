import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
    const PATH = "/static/textures/wall/"
    
    const props = useTexture({
        map: PATH + "baseColor.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <planeGeometry args={[6, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}