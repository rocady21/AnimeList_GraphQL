import React from "react";
import CardRelations from "./CardRelation";


const Relations = ({relations}) => {
    return (
        <div className="w-full min-w-2/3 max-w-2/3  bg-white mx-2 p-4 flex overflow-auto scrollable-container">
            {
                relations.map((anime,index)=> {
                    return <CardRelations key={index} anime = {anime.node}/>
                })
            }
        </div>
    )

}

export default Relations