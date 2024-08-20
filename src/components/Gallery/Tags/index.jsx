import styled from "styled-components"
import tags from "./tags.json"
import { useEffect, useState } from "react";

const ContainerTags = styled.div`
display:flex;
margin: 2% 0%;
gap: 24px;
align-items:center;
`;

const TitleTag = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    text-shadow: #000000 3px 0 15px;
`;

const ButtonTag = styled.button`
    font-size: 1rem;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #ffffff;
    }
    &:active 
    {
        background-color:#ffffff;
        color:#000000;
        font-weight: 600;
    }
    `
const Div = styled.div`
display: flex;
gap: 24px;
justify-content: end;
`


const Tags = ({setTag}) => {
    return (
        <ContainerTags>
            <TitleTag>Search for Tags :</TitleTag>
            <Div>
                {tags.map(tag => <ButtonTag 
                key={tag.id}
                onClick={() => setTag(tag.tag)}
                >{tag.title}
                </ButtonTag>)}
            </Div>
        </ContainerTags>
    )
}

export default Tags