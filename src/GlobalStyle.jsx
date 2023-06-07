import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        height: 100vh;
        background-color: #808080e6;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`