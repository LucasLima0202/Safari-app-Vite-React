import styled from "styled-components"
import Image from "../Gallery/Image"
import IconButton from "../IconButton"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogStylized = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({photo, close, onToogleFavorite}) => {
    return (
        <>
            {photo && <>
                <Overlay />
                <DialogStylized open={!!photo}  onClose={close}>
                    <Image photo={photo} expand={true} onToogleFavorite={onToogleFavorite} />
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/images/icon/close.svg" alt="Icon Close" />
                        </IconButton>
                    </form>
                </DialogStylized>
            </>}
        </>
    )
}


{/* <dialog open={!!photo}>
{photo && (
  <>
    <img src={photo.path} alt={photo.title} />
    <p>{photo.title}</p>
  </>
)}
<form method="dialog">
  <button type="submit">Close</button>
</form>
</dialog> */}

export default ModalZoom