import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import bannerBackground from './assets/Banner.png'
import Gallery from "./components/Gallery"
import photo from "./json/photo.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"



const BackgroundGradient = styled.div`
background: linear-gradient(174.61deg, #00050C 20.16%, #212121 88%, #1E1E1E 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer = styled.div`
width: 1440px;
margin: 0 auto;
max-width:100%;
`
const ContentGallery = styled.section`
display:flex;
flex-direction: column;
flex-grow: 1;
`

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
    padding:24px;
`

const App = () => {
  const [PhotosFromGallery, setPhotosFromGallery] = useState(photo)
  const [SelectedPhoto, setSelectedPhoto] = useState(null)
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <ContentGallery>
            <Banner
              text="The most complete Gallery of Photos from our Safari!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              OnZoomRequested={photo => setSelectedPhoto(photo)}
              photos={PhotosFromGallery}
            />
          </ContentGallery>
        </MainContainer>

      </AppContainer>
      <ModalZoom photo={SelectedPhoto} close={() => setSelectedPhoto(null)} />
    </BackgroundGradient>
  )
}

export default App
