import React, { useState } from "react";
import styled from "styled-components";
import imageDataCU from './imageDataCU.js';

const imageContainer = styled.div`
    width: 25%;
    background-color: rgba(255,255,255,.15);
    display:flex;
    flex-direction: column;
    align-items:space-evenly;
`;

const tNailname = styled.h3`
    text-align:center;
`;

const image = styled.img`
    width:50%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

function Images() {
    const [closeups, setCloseups] = useState(imageDataCU)
    return (
        {
            closeups.map(object => {
                return
                <imageContainer>
                    <tNailname>{object.name}</tNailname>
                    <image src={object.imageSrc} alt={object.alt} />
                </imageContainer>
            })

        })



};

export default Images;