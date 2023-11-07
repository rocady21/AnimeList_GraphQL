import React from "react";
import CardInfo from "./CardInfo";


const Portada = ({data})=> {
    return (
        <div className="w-full relative">
            {
                data.bannerImage? <img className="object-contain max-h-[500px] w-full" src={data.bannerImage} alt="" /> : <div className="bg-black/90 w-full h-[350px]">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
            }
            <CardInfo data={data}/>
        </div>
    )
}

export default Portada