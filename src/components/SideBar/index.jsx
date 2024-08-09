import styled from "styled-components"
import NavagationItem from "./NavagationItem"
const UlListStilized = styled.ul`
    list-style:none;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    color:#ffffff;
    text-decoration:none;
    width:212px;
    padding:0;
    /* padding: 60px 50px; */
`




const SideBar = () => {
    return (
        <aside>
            <nav>
                <UlListStilized>
                    <NavagationItem
                        Icon_active="/icons/icon_active_h.png"
                        Icon_inactive="/icons/icon_inactive_h.png"
                        active={true}
                    >
                        Home
                    </NavagationItem>
                    <NavagationItem
                        Icon_active="/icons/icon_active_e.png"
                        Icon_inactive="/icons/icon_inactive_e.png"
                    >
                        Most Viewed
                    </NavagationItem>
                    <NavagationItem
                        Icon_active="/icons/icon_active_l.png"
                        Icon_inactive="/icons/icon_inactive_l.png"
                    >
                        Most Liked
                    </NavagationItem>
                    <NavagationItem
                        Icon_active="/icons/icon_active_n.png"
                        Icon_inactive="/icons/icon_inactive_n.png"
                    >
                        News
                    </NavagationItem>
                    <NavagationItem
                        Icon_active="/icons/icon_active_s.png"
                        Icon_inactive="/icons/icon_inactive_s.png"
                    >
                        Surprise me
                    </NavagationItem>
                </UlListStilized>
            </nav>
        </aside>
    )
}

export default SideBar
