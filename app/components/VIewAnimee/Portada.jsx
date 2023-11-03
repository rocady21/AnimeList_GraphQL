import React from "react";
import CardInfo from "./CardInfo";


const Portada = ({banner,data})=> {
    return (
        <div className="w-full relative">
            {
                banner? <img className="object-contain" src={banner} alt="" /> : <div className="bg-black/90 w-full h-[250px]"></div>
            }
            <CardInfo data={data}/>
        </div>
    )
}

export default Portada