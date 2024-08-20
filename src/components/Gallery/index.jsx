import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popularity from "./Popularity";
import Image from "./Image";
import { useState } from "react";


const GalleryContainer = styled.div`
    display:flex;
    gap:24px;
`
const SectionFloat = styled.section`
    flex-grow: 1;
`

const ImgContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({ photos = [],setTag, OnZoomRequested,onToogleFavorite}) => {
   
    
 

    return (
     <>
      <Tags setTag={setTag}/>
      <GalleryContainer>
          <SectionFloat>
             <Title> Browse the gallery </Title>
             <ImgContainer>
               {photos.map(photo => <Image 
               photo={photo}
               tag={photo.tagId}
               OnZoomRequested={OnZoomRequested}
               key={photo.id}
               onToogleFavorite={onToogleFavorite} 
               />)} 
              </ImgContainer>
          </SectionFloat>
          <Popularity/>

      </GalleryContainer>
     </>
    )
  }
  
  {/*  {photos.map((photo) => (
                  <Image 
                  OnZoomRequested={SelectedPhoto}
                  key={photo.id} 
                  {...photo} />
                ))}  spread props example */}


  export default Gallery;