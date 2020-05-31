import React, { useState, useEffect } from "react";
import Images from './images/Images';
import Axios from "axios";
import styled from "styled-components";

const AppDiv = styled.div`
text-align: center;
`;

const AppHeader = styled.h1`
background-color: rgba(146, 146, 245, .15);
 margin: 0;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  `;

function App() {


    return (
        <AppDiv>
            <AppHeader></AppHeader>
        </AppDiv>
    );
}

export default App;