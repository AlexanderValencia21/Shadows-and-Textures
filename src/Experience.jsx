import { OrbitControls } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Wall from "./Wall";
import Floor from "./Floor";
import { useRef } from "react";
import {
    DirectionalLightHelper,
    HemisphereLightHelper,
    PointLightHelper,
    SpotLightHelper,
} from "three";

export default function Experience() {
    const directionalLightRef = useRef();
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    const rectAreaLight = useRef();
    const spotLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper, 1);
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
    useHelper(pointLightRef, PointLightHelper, 2);
    //useHelper(rectAreaLight, RectAreaLightHelper, 1)
    useHelper(spotLightRef, SpotLightHelper, 1);

    return (
    <>
    <Perf position="top-left" />

    <OrbitControls makeDefault />

    {/*<hemisphereLight  ref={hemisphereLightRef} castShadow position={[-2, 4, -2]} intensity={5} />*/}
    {/*<directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} intensity={1.5}*/}
    {/*<pointLight
        ref={pointLightRef}
        castShadow
        position={[0, 3, -6]}
        intensity={4}
    />*/}
    
    <spotLight  ref={spotLightRef} castShadow position={[5, 4, -6]} intensity={2.5} />

    <ambientLight intensity={0.5} />
    <Wall />
    <Floor />
    </>
);
}
