import styled from "styled-components";
import ButtonComponent from './ComponentButton'

export const StyledButton = styled.button`
    background-color: #48ff00;
    width: 180px;
    height: ${({ theme }) => theme.size.xxl};
    border: ${(prop) => 
    prop.border ? prop.border : 'none'};
    border-radius: 10px;
    color: ${(prop) => prop.color ? prop.color : '#fff'};
    cursor: pointer;
    font-size: 1.4rem;

    &:hover {
        color: black;
        background-color: blue;
    }
`
export const Button2 = styled(ButtonComponent)`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 180px;
    height: 60px;
    cursor: pointer;
`