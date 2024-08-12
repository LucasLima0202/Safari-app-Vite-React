import styled from "styled-components"
import Title from "../../Title"
import photo from './ft-popularity.json'

const ColumnPhoto = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Img = styled.img`
    max-width: 180px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #ffffff;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    transition: all ease-in-out 0.2s;
    &:hover{
        background-color:#ffffff;
        border:#000000 solid 2px;
        color:black;
    }
`;

const Popularity = () => {
    return (
        <section>
            <Title $align="center">Popularity</Title>
            <ColumnPhoto>
                {photo.map(photo => <Img key={photo.id} src={photo.path} alt={photo.alt}/>)}
            </ColumnPhoto>
            <Button>See More</Button>
        </section>
    )
}

export default Popularity