import React from "react";


const InfoAnime = ({info})=> {


    const {startDate,endDate,format,popularity,duration,episodes,type,countryOfOrigin,source,studios,seasson,status} = info

    return (
        <div className="bg-white m-auto w-full mb-[50px] mt-[150px] md:my-0  md:w-1/5  bg-gray-100 p-[25px] flex flex-col items-start shadow-lg shadow-md">

            <div className="my-3"><span className="font-medium">Estado:</span>
                <p className="text-light text-sm">{status}</p>
            </div>
            <div className="my-3"><span className="font-medium">Favoritos:</span>
                <p></p>
            </div>
            <div className="my-3"><span className="font-medium">Studios:</span>
                <p>
                    {
                    studios.edges.map((studio,index)=> {
                        return <span key={index} className="text-light text-sm">{studio.node.name}</span>
                    })
                    }
                </p>
            </div>
            <div className="my-3"><span className="font-medium">Inicio:</span>
                <p className="text-light text-sm">{startDate.day + "/" + startDate.month + "/" + startDate.year}</p>
            </div>
            <div className="my-3"><span className="font-medium">Final:</span>
                <p className="text-light text-sm">{endDate.day + "/" + endDate.month + "/" + endDate.year}</p>
            </div>
            <div className="my-3"><span className="font-medium">Tipo:</span>
                <p className="text-light text-sm">{type}</p>
            </div>
            <div className="my-3"><span className="font-medium">Seasson:</span>
                <p className="text-light text-sm">{seasson}</p>
            </div>
            <div className="my-3"><span className="font-medium">Source:</span>
                <p className="text-light text-sm">{source}</p>
            </div>
            <div className="my-3"><span className="font-medium">Pais:</span>
                <p className="text-light text-sm">{countryOfOrigin}</p>
            </div>
            <div className="my-3"><span className="font-medium">Episodios:</span>
                <p className="text-light text-sm">{episodes}</p>
            </div>
            <div className="my-3"><span className="font-medium">Duration:</span>
                <p className="text-light text-sm">{duration}</p>
            </div>
            <div className="my-3"><span className="font-medium">Formato:</span>
                <p className="text-light text-sm">{format}</p>
            </div>
            <div className="my-3"><span className="font-medium">Popularidad:</span>
                <p className="text-light text-sm">{popularity}</p>
            </div>

            

        </div>
    )

}

export default InfoAnime

