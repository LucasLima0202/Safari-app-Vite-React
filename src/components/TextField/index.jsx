import styled from "styled-components"
import search from "/images/search.svg"

const TextField_Container_Stylized = styled.div`
   position: relative;
   display: inline-block;
`;
const TextField_Input_Stylized = styled.input`
   height: 4rem;
    padding: 2% 2%;
    border-radius: 10px;
    border: 2px solid;
    border-color: #ffffff;
    background: transparent;
    box-sizing: border-box;
    font-family: GandhiSansRegular;
    font-weight: 400;
    font-style: normal;
    width: 35rem;
    color: #b9b7b7;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 20px;`;

const Icon = styled.img`
    position: absolute;
    top: 15px;
    right: 10px;
    width: 25px;
    height: 30px;
`;

const TextField = (props) => {

    return (
        <TextField_Container_Stylized>
            <TextField_Input_Stylized placeholder="What are you looking for?" {...props} />
            <Icon src={search} alt="icon" />
        </TextField_Container_Stylized>
    )
}

export default TextField