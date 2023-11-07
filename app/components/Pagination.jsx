import { Pagination, Stack } from "@mui/material";
import React from "react";

const PaginationFinal = ({totalAnimes,currentPage,setCurrentPage,animeForPage})=> {

    const pages = totalAnimes / animeForPage
    // llenamos cuantas paginas tendremos
    
    return (
        <Pagination onChange={(e,page)=>{
            setCurrentPage(page)
        }}  count={pages} page={currentPage} variant="outlined" shape="rounded" />
    )
}

export default PaginationFinal