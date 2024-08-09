import styled from "styled-components"
import TextField from "../TextField"

const Header_Stylized = styled.header`
     padding: 40px 30px; 
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    img{
        max-width:262px;
    }
`

 const Header = () => {
    return (
        <Header_Stylized>
            <img src="/images/logo.svg" alt="img" />
            <TextField/>
        </Header_Stylized>
    )
}

export default Header