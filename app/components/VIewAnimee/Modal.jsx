"use client"
import React, { useEffect, useRef, useState } from "react";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

const ModalCharacter = ({ open, handleClose, info }) => {

    const [showB, setShowB] = useState(false)

    const [refPadre, setRefPadre] = useState(null)
    const { age, gender, id, name, image, dateOfBirth, modNotes, siteUrl, description } = info.node
    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,

    }

    return (
        <>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >

                <Box sx={{ ...styleModal, width: 900 }}>
                    <div className="flex flex-row">
                        <img className=" object-center object-contain" src={image.large} alt="" />
                        <div className="info px-4 w-2/3">
                            <p className="my-2"><span className=" mx-1">Nombre:</span>{name.userPreferred}</p>
                            <p className="my-2"><span className=" mx-1">Nacimiento:</span>{dateOfBirth.day + "/" + dateOfBirth.month + "/" + dateOfBirth.year}</p>
                            <p className="my-2"><span className=" mx-1">Género:</span>{gender === "Male" ? "Hombre" : "Mujer"}</p>
                            <div ref={(ref) => setRefPadre(ref)} id="idPadre" className={`${showB === true ? "" : " h-auto max-h-[200px] "} w-full flex flex-col`}>
                                <span className=" my-2 mx-1 ">Descripcion:</span>
                                <p className={`leading-relaxed text-light tracking-tight bg-scroll ${showB === true ? `` : `overflow-hidden`}`}>{description}</p>

                            </div>

                            {
                                refPadre && refPadre.clientHeight >= 150 && <button onClick={() => setShowB(!showB)} className="w-full py-2 text-center shadow-lg">{showB === true ? "Mostrar Menos" : "Mostrar Mas"}</button>

                            }

                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCharacter