import { genres } from "@/app/utils/genres";
import React from "react";


const ShowInfo = ({info})=> {
    console.log(info);
    const triangulo = {
        position: "absolute",
        left: "-10px",
        top: "50%",
        borderLeft: "10px solid transparent",
        borderRight:" 10px solid transparent",
        borderTop: "10px solid white",
      }

    const styleP = {
        background: info.coverImage.color,
        fontWeight:"bold",
        color: "white",
    }

    return (
        <div className="absolute z-10 top-0 left-[103%] bg-white shadw-lg rounded p-4 min-w-[200%] h-[80%] mt-[10%] flex flex-col">
            <div style={triangulo}></div>
            <div className="flex flex-col mb-5 ">
                <h1 className="title text-light"> {info.title.userPreferred}  </h1>
                <p className="text-[10px] font-bold ">({info.title.native})</p>
            </div>
            <p className="text-light flex flex-row items-center my-2">{info.format} <span className="font-bold mx-1 text-[20px]">·</span> {info.episodes}</p>

            <div className="flex flex-row">

            {
            
                info.studios.edges.map((studio,index)=> {
                    const final = info.studios.edges.length -1
                    console.log(final);
                    console.log(index);
                    return <div className="text-light">{studio.node.name}{index === final? "" : <span className="mx-2 font-bold">-</span> }</div>
                })
            }
            </div>


            <div className="generos flex flex-row flex-wrap px-2 mt-5">
                {
                    info.genres.map((genero,index)=> {
                        const color = genres.find((gen)=> {
                            return gen.gen === genero
                        })
                        const folorF = color.color
                        return <p key={index} style={styleP} className={`p-2 rounded-[20px]`}>{genero}</p>
                    })
                }
            </div>
        </div>

    )
}


export default ShowInfo