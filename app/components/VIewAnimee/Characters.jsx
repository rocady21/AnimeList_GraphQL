import React from "react";
import CharactersCard from "./CardCharacter";


const Characters = ({characters})=> {
    return (
        <div className="w-full p-5 bg-white my-5 mx-2 flex flex-row flex-wrap">
        
            {
                characters.map((chr,index)=> {
                    return <CharactersCard info={chr}/>
                })
            }
        
        </div>
    )

}

export default Characters

