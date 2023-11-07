import React from "react";


const Loading = ()=> {

    return (
        <div className="flex flex-col">
            <div className="portada w-full h-[300px] bg-gray-300 animate-pulse relative">
                <div className="absolute flex flex-row w-full top-[70%] left-[14%]">
                    <div className="card flex flex-col w-[220px] h-[350px] ">
                        <div className="foto w-full h-[85%] bg-gray-300 animate-pulse  shadow-md "></div>
                        <div className="buttons h-[10%] mt-3 flex flex-row justify-between ">
                            <div className="list bg-gray-300 animate-pulse w-[60%]"></div>
                            <div className="fav bg-gray-300 animate-pulse w-[20%]"></div>
                        </div>
                    </div>
                    <div className="info mt-[120px] w-[50%] flex flex-col mx-4">
                        <div className="title w-[150px] h-[20px] bg-gray-300 animate-pulse"></div>
                        <div className="text w-full h-[150px] mt-5 bg-gray-300 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <div className="padreBody mt-[310px] w-[74%] m-auto flex flex-row">
                <div className="info w-1/5 min-h-[800px] bg-gray-300 animate-pulse mr-3"></div>
                <div className="charactersAndRelations w-4/5 bg-gray-300 animate-pulse flex-wrap p-5 flex flex-row">
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>
                    <div className="div p-5 w-[33%] flex items-center ">
                        <div className="hijo w-full h-[200px] bg-gray-400/30 animate-pulse shadow-lg">

                        </div>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Loading