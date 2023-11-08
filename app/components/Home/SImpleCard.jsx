"use client"
import React, { useState } from "react";
import ShowInfo from "./ShowInfo";


const SimpleCard = ({data,index,keyA})=> {

    const [show,setShow] = useState(false)
    const PonerColor = ()=> {
        console.log("A");
        let p = document.getElementById("texto" + index + keyA)
        p.style.color = data.coverImage.color !== null? data.coverImage.color : "black"
        setShow(true)

    }
    const QuitarColor = ()=> {
        let p = document.getElementById("texto" + index + keyA)
        p.style.color = "gray"
        setShow(false)

    }
    
    return (
        <div onMouseEnter={PonerColor} onMouseLeave={QuitarColor} className="m-2 w-full flex flex-col relative ">
            <img className="w-full h-[250px]" src={data.coverImage.large} alt="" />
            <p id={"texto" + index + keyA} style={{color:"gray"}} className={`font-bold text-[12px] mt-1 `}>{data.title.userPreferred}</p>
            {
                show === true && <ShowInfo info={data} />
            }
        </div>
    )

}
export default SimpleCard