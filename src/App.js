import React from "react";
import styled from "styled-components";
import Navigation from './components/Navigation';

const AppDiv = styled.div`
text-align: center;
background-image:linear-gradient(red, orange,  yellow, green, blue, purple);
width: 1000px;
height: 1000px;
`;

const AppHeader = styled.h1`
background-color: rgba(255, 0, 255, .3);
 margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: silver;
  text-shadow: 2px 2px black;
  `;

const AppSubheader = styled.p`
    font-weight:bolder;
    /* font-size:3rem; */
  `;

function App() {


    return (
        <AppDiv>
            <Navigation />
            <AppHeader>Laura Stecher's Art Works</AppHeader>
            <AppSubheader>Click Any Thumbnail to View Full-Size</AppSubheader>
        </AppDiv>
    );
}

export default App;