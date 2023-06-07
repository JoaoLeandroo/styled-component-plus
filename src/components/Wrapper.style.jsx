import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #000000ab;
    width: 500px;
    height: 500px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;


    & a {
        color: #fff;
        text-decoration: none;
        font-size: 1.3rem;
    }

    & a:hover {
        color: #ffff00;
        text-decoration: underline;
    }
`