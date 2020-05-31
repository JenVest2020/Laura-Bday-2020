import React from "react";
import styled from "styled-components";

const AppDiv = styled.div`
text-align: center;
background-color: red;
`;

const AppHeader = styled.h1`
background-color: black;
 margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: yellow;
  `;

function App() {


    return (
        <AppDiv>
            <AppHeader>Laura Stecher's Art Works</AppHeader>
        </AppDiv>
    );
}

export default App;