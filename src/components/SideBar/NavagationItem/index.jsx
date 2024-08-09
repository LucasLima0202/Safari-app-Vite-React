import styled from "styled-components";

const LiStylized = styled.li`
color: ${props => props.$active ? '#FFFFFF' : '#9F9F9F'};
font-weight: ${props => props.$active ? '700' : '500'};
font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
padding: 0;
display:flex;
font-size:1rem;
align-items:center;
gap:22px;
margin-bottom:30px;
cursor: pointer;

`

const NavagationItem = ({ children, Icon_active, Icon_inactive, active = false }) => {
    return (<LiStylized $active={active}>
        <img src={active ? Icon_active : Icon_inactive} alt="" />
        {children}
    </LiStylized>)
}

export default NavagationItem;