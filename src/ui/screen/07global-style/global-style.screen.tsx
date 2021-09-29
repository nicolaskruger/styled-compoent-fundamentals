import { FC } from "react"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Thing = styled.div`
    && {
        color: blue;
    }
`;

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`;

const GlobalStyleScreen: FC = () => {
    return (
        <>
            <GlobalStyle>
                <Thing>
                    I'm blue, da ba dee da ba daa
                </Thing>
            </GlobalStyle>
        </>
    )
}

export {
    GlobalStyleScreen
}