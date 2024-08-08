import styled from "styled-components"

const Header_Stylized = styled.header`
    padding: 60px 0;
    display:flex;
    justify-content:space-between;
    img{
        max-width:212px;
    }
`

 const Header = () => {
    return (
        <Header_Stylized>
            <img src="/images/logo.svg" alt="img" />
        </Header_Stylized>
    )
}

export default Header