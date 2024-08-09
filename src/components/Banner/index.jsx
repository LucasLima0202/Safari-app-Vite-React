import styled from "styled-components"


const BannerStylized = styled.div`
background-image: ${props => `url(${props.$backgroundImage})`};
flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const TextBannerStylized = styled.h1`
/* color:#ffffff;
font-size:2.2rem;
font-family: GandhiSansRegular;
width:40%;

padding: 0px  13%;
word-spacing: 17px;
text-shadow: #000000 3px 0 15px; */
font-weight: 400;
    font-size: 2.5rem;
    line-height: 48px;
    font-family: GandhiSansRegular;
    color: #FFFFFF;
    word-spacing: 12px;
    max-width: 600px;
    padding: 0 64px;
    text-shadow: #000000 3px 0 15px;
`


const Banner = ({text, backgroundImage}) => {
    return(
<BannerStylized $backgroundImage={backgroundImage}> 
    <TextBannerStylized>
    {text}
    </TextBannerStylized>
</BannerStylized>
    )
}

export default Banner;