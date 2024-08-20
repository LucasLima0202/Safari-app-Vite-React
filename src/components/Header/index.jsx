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

 const Header = ({filter,setFilter}) => {
    return (
        <Header_Stylized>
            <img src="/images/logo.svg" alt="img" />
            <TextField filter={filter} setFilter={setFilter}/>
        </Header_Stylized>
    )
}

export default Header