import React from "react";


const CardInfo = ({data})=> {
    console.log(data);
    console.log("A");
    return (
        <div className="flex flex-row  left-[10%] absolute 2xl:left-[15%] xl:left-[15%] lg:left-[13%] md:left-[15%] sm:left-[20%] top-[65%]">
            <div className="padreCard flex flex-col">
                <img className="bg-white shadow-lg md:w-[200px] md:h-[300px] w-[125px] h-[175px] w-full h-[80%] rounded" src={data.coverImage.extraLarge} alt="" />
                <div className="buttons w-full py-4 flex flex-row justify-between">
                    <button className="bg-blue-400 p-2 text-white font-bold d-inline">Añadir a la Lista</button>
                    <button className="fav bg-red-500 rounded text-white hover:bg-gray-100 hover:text-red-500 border border-red-400 border-1 p-2 sha ">
                    <svg className="w-6 h-6  font-bold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
    </svg>
                    </button>
                </div>
            </div>
            <div className="info px-5 mt-[150px] w-[65%] h-[200px] overflow-hidden ">
                <h1>{data.title.userPreferred} <span className="font-bold text-sm">({data.title.native})</span> </h1>

                <p className="mt-5 ">{data.description}</p>

            </div>
        </div>
    )
}

export default CardInfo