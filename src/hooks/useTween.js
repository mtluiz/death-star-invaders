import { useState } from "react";

export default function useTween(start, end){

    let [number ,setNumber ] = useState(0);

    function tween(){
        const interval = setInterval(()=> {
            setNumber(number + 0.1)
        }, 1)

        if(number > 10) clearInterval(interval)
    }

    return {
        number,
        tween
    }
}