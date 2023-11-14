import React from "react";


const Trailer = ({trailer})=> {
    console.log(trailer);
    console.log(`https://www.${trailer?.site}.com/watch?v=${trailer?.id}`);
    return (
        <div className="trailer bg-white p-4">
            <h1 className="uppercase font-bold text-[25px] mt-[50px]">Trailer</h1>
            <div className="video my-[25px] ">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer?.id}?start=120`} frameborder="0" allow="accelerometer; autoplay=true; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Trailer