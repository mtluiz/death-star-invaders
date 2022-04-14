import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import { useRef } from "react";
import { useGameContext } from "../context/gameContext";

export default function Shot(props){

    const teste = useGameContext()

    const ref = useRef(null)

    useFrame(()=> {
        ref.current.rotation.x = 1.5
        ref.current.position.x = teste.playerPosition.x
        ref.current.position.z -= 0.7
    })

    window.addEventListener('keydown', (e)=> {
        if(e.key == " "){
            if(ref.current) ref.current.position.z = 5 
        }
    })

    return (
        <mesh {...props} ref={ref} >
            <cylinderGeometry args={[0.1,0.1,1,64]} rotateY={1} />
            <meshBasicMaterial color={"red"} />
        </mesh>
    )
}