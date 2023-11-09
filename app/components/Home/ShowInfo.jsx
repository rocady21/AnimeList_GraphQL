import { genres } from "@/app/utils/genres";
import React from "react";


const ShowInfo = ({info})=> {
    const triangulo = {
        position: "absolute",
        left: "-10px",
        top: "50%",
        borderLeft: "10px solid transparent",
        borderRight:" 10px solid transparent",
        borderTop: "10px solid white",
      }

    const styleP = {
        background: info.coverImage.color? info.coverImage.color : "green",
        fontWeight:"bold",
        color: "white",
    }

    return (
        <div className="absolute text-[12px] z-10 top-0 left-[103%] bg-white shadw-lg rounded p-4 min-w-[200%] mt-[10%] flex flex-col">
            <div style={triangulo}></div>
            <div className="flex flex-col mb-2 ">
                <h1 className="title text-light"> {info.title.userPreferred}  </h1>
                <p className="text-[10px] font-bold ">({info.title.native})</p>
            </div>
            <p className="text-light flex flex-row items-center ">{info.type} <span className="font-bold mx-1 text-[20px]">·</span> {info.type === "ANIME"? info.episodes : info.volumes}</p>

            <div className="flex flex-col">
            <h1>Estudios:</h1>
            {
                info.studios.edges.map((studio,index)=> {
                    return <p className="text-light">{studio.node.name}</p>
                })
            }
            </div>


            <div className="generos flex flex-row flex-wrap mt-2">
                {
                    info.genres.map((genero,index)=> {
                        return <p key={index} style={styleP} className={`p-1 m-1 p-2 rounded-[20px]`}>{genero}</p>
                    })
                }
            </div>
        </div>

    )
}


export default ShowInfo