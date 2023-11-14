"use client"
import React, { useState } from "react";
import ShowInfo from "./ShowInfo";
import { useRouter } from "next/navigation";


const SimpleCard = ({info:data,index,keyA,})=> {
    const Router = useRouter()
    const [show,setShow] = useState(false)
    const PonerColor = ()=> {
        let p = document.getElementById("texto" + index + keyA)
        p.style.color = data.coverImage.color !== null? data.coverImage.color : "black"
        setShow(true)

    }
    const QuitarColor = ()=> {
        let p = document.getElementById("texto" + index + keyA)
        p.style.color = "gray"
        setShow(false)

    }
    const VerAnime = ()=> {
        Router.push("/verAnime/" + data.id)
    }
    
    return (
        <div role="button" onClick={VerAnime} onMouseEnter={PonerColor} onMouseLeave={QuitarColor} className="m-2 h-full w-full flex flex-col relative ">
            <img className="w-full  h-[250px] shadow " src={data.coverImage.large} alt="" />
            <p id={"texto" + index + keyA} style={{color:"gray"}} className={`font-bold text-[12px] mt-1 `}>{data.title.userPreferred}</p>
            {
                show === true && <ShowInfo info={data} />
            }
        </div>
    )

}
export default SimpleCard