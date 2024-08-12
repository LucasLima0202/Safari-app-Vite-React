import styled from "styled-components";
import heart_fill from "/images/icon/favorite.svg"
import heart_out from "/images/icon/favorite_out.svg"
import expandI from "/images/icon/Expand.svg"
import IconButton from "../../IconButton"



const Figure = styled.figure`
  width: ${(props) => (props.$expand ? "90%" : "400px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column; 
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #000000;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
      font-size: 0.6;
    }
    h3,
    h4 {
      margin: 0;
      font-weight:200;
      text-align: left
    }
    
  }
  
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = ({ photo, expand = false, OnZoomRequested }) => {
  return (
    <Figure $expand={expand}  id={`foto-${photo.id}`}>
      <img src={photo.path} alt={photo.title} />
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
        <h4>{photo.source}</h4>
                <IconButton>
                    <img src={heart_out} alt="Icon of favorite" />
                </IconButton>
                 {!expand && <IconButton aria-hidden={expand} onClick={() => OnZoomRequested(photo)}>
                    <img src={expandI} alt="Icon of expand" />
                </IconButton>}
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Image;