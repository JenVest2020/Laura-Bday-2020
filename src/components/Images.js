import React, { useState } from "react";
import styled from "styled-components";
import imageDataCU from './imageDataCU.js';

const ImageContainer = styled.div`
    width: 25%;
    background-color: rgba(255,255,255,.15);
    display:flex;
    flex-direction: column;
    align-items:space-evenly;
`;

const imageInfoContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const TnailName = styled.h3`
    text-align:center;
`;

const Image = styled.img`
    width:50%;
    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
`;

function Images() {
    const [closeups, setCloseups] = useState(imageDataCU)
    console.log('from Images', closeups)

    return (

        <imageInfoContainer>
            {closeups.map(object => {
                return (
                    <ImageContainer>
                        <TnailName>{object.name}</TnailName>
                        <Image src={object.imageSrc} alt={object.alt} />
                    </ImageContainer>)
            })}
        </imageInfoContainer>
    )



};

export default Images;