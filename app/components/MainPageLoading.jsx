import React, { useContext } from "react";
import AnimeContext from "../context/animes/AnimesContext";


const MainPageLoading = ({main})=> {


    return (
        <div className={`flex flex-col items-center w-[60%] m-auto`}>

        <div className="tendencia mt-[50px] w-full w-full">
          <div className=" flex flex-row justify-between items-start">
            <h1 className="font-bold text-gray-800 uppercase text-start">{main === true && "Tendecias"}</h1>
            <p role="button" className="uppercase text-[12px]">{ main === true && "Ver Todos"}</p>
          </div>
          <div className="data flex flex-row w-[100%] max-w-[100%]">
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>

          </div>
        </div>
  
        <div className="tendencia mt-[15px] w-full">
          <div className=" flex flex-row justify-between items-start">
            <h1 className="font-bold text-gray-800 uppercase text-start">{main === true && "Popular en esta temporada"}</h1>
            <p  role="button" className="uppercase text-[12px]">{ main === true && "Ver Todos"}</p>
          </div>
          <div className="data flex flex-row ">
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
          </div>
        </div>
  
        <div className="tendencia mt-[15px] w-full">
          <div className=" flex flex-row justify-between items-start">
            <h1 className="font-bold text-gray-800 uppercase text-start">{main === true && "Populares"}</h1>
            <p   role="button" className="uppercase text-[12px]">{main === true && "Ver Todos"}</p>
          </div>
          <div className="data flex flex-row ">
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <div className="w-full h-[250px] shadow bg-gray-300 animate-pulse"></div>
                <div className="w-full h-[15px] bg-gray-300 mt-2"></div>
            </div>
          </div>
        </div>  
      </div>
    )
}

export default MainPageLoading