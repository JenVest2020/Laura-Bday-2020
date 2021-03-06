import React from "react";
import { Route } from 'react-router-dom';
import styled from "styled-components";
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';

const AppDiv = styled.div`
text-align: center;
background-image:linear-gradient(#990000, orange,  #cccc00, green, blue, purple);
width: 1000px;
height: 1000px;
margin: 0 auto;
`;

const AppHeader = styled.h1`
background-color: rgba(255, 255, 255, .3);
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
            <Route path='/homepage'>
                <AppHeader>Close up Genious of Laura Stecher's Art Works</AppHeader>
                <AppSubheader>Click Any Thumbnail to View Larger-Size</AppSubheader>
                <Homepage />
            </Route>
        </AppDiv >
    );
}

export default App;