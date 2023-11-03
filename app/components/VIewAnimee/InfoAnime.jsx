import React from "react";


const InfoAnime = ({info})=> {


    const {startDate,endDate,format,popularity,duration,episodes,type,countryOfOrigin,source,studios,seasson,status} = info

    return (
        <div className="bg-white w-[250px] h-[1000px] bg-gray-100 p-[25px] flex flex-col items-start shadow-lg">

            <p className="my-3"><span className="font-medium">Estado:</span>
                <p className="text-light text-sm">{status}</p>
            </p>
            <p className="my-3"><span className="font-medium">Favoritos:</span>
                <p></p>
            </p>
            <p className="my-3"><span className="font-medium">Studios:</span>
                <p>
                    {
                    studios.edges.map((studio)=> {
                        return <span className="text-light text-sm">{studio.node.name}</span>
                    })
                    }
                </p>
            </p>
            <p className="my-3"><span className="font-medium">Inicio:</span>
                <p className="text-light text-sm">{startDate.day + "/" + startDate.month + "/" + startDate.year}</p>
            </p>
            <p className="my-3"><span className="font-medium">Final:</span>
                <p className="text-light text-sm">{endDate.day + "/" + endDate.month + "/" + endDate.year}</p>
            </p>
            <p className="my-3"><span className="font-medium">Tipo:</span>
                <p className="text-light text-sm">{type}</p>
            </p>
            <p className="my-3"><span className="font-medium">Seasson:</span>
                <p className="text-light text-sm">{seasson}</p>
            </p>
            <p className="my-3"><span className="font-medium">Source:</span>
                <p className="text-light text-sm">{source}</p>
            </p>
            <p className="my-3"><span className="font-medium">Pais:</span>
                <p className="text-light text-sm">{countryOfOrigin}</p>
            </p>
            <p className="my-3"><span className="font-medium">Episodios:</span>
                <p className="text-light text-sm">{episodes}</p>
            </p>
            <p className="my-3"><span className="font-medium">Duration:</span>
                <p className="text-light text-sm">{duration}</p>
            </p>
            <p className="my-3"><span className="font-medium">Formato:</span>
                <p className="text-light text-sm">{format}</p></p>
            <p className="my-3"><span className="font-medium">Popularidad:</span>
                <p className="text-light text-sm">{popularity}</p>
            </p>

            

        </div>
    )

}

export default InfoAnime

