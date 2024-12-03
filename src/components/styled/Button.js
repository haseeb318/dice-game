
import styled from "styled-components"

export const Button =styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 220px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        box-shadow: 2px 2px 4px gray;
        cursor: pointer;
    }

`

export const OutlineButton =styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover{
        background-color: black;
        color: white;
    }

`