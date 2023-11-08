import React from "react";


const SimpleCard = ({img,name})=> {
    return (
        <div className="m-2 w-full h-[350px]">
            <img className="w-full h-full" src={img} alt="" />
            <p className="uppercase font-light "></p>
        </div>
    )

}
export default SimpleCard