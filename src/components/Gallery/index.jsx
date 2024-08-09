import styled from "styled-components";

const GalleryStylized = styled.h2`
color:#ffffff;
font-size:1.6rem;
font-family: GandhiSansRegular;
font-weight:500;
text-shadow: #000000 3px 0 15px;

`


const Gallery = () => {
    return (
      <GalleryStylized>Browse the gallery </GalleryStylized>
    )
  }
  
  export default Gallery;