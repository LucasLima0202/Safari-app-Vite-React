import styled from "styled-components";

const Title = styled.h2`
color:#a5a5a5;
font-size:1.6rem;
font-family: GandhiSansRegular;
font-weight:500;
text-shadow: #000000 3px 0 15px;
text-align: ${props => props.$align ? props.align : 'left'};

`

export default Title