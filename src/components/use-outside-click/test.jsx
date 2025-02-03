import { useEffect, useRef, useState } from "react"
import UseOutsideClick from ".";





export default function UseOnClickOutsideTest(){
    const ref = useRef();
    UseOutsideClick(ref,()=>setShowContent(false));
    const [showContent,setShowContent]=useState(false);

    return <div>

        {
            showContent ?
             <div ref={ref}>
                <h1> This is a random Content</h1>
                <p>Please click outside to click to close this content.</p>
             </div> 
            : <button onClick={()=>setShowContent(true)}>Show Content</button>

            
        }

    </div>
}