import React from "react";
import CardInfo from "./CardInfo";


const Portada = ({banner,data})=> {
    return (
        <div className="w-full relative">
            <img className="object-contain" src={banner} alt="" />
            <CardInfo data={data}/>
        </div>
    )
}

export default Portada