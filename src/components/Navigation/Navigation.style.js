import styled from 'styled-components';
import {breakPoints} from '../../globalVars.js';

export const NavLink = styled.a`
padding:1.5rem;
font-size:1.5rem;
border:0.1rem solid rgba(224,222,222,0.529);
text-transform:capitalize;
&:hover{
    text-decoration:underline;
    cursor:pointer;
}
`;

export const HamburgerNavigation = styled.nav`
position:absolute;
top:100%;
left:0;
background-color:#fafafa;
z-index:5;
display:flex;
flex-direction:column;
width:100%;

${breakPoints.lg} {
		display: none;
	}
`;

export const NavigationOnBigScreen = styled(HamburgerNavigation)`

display: none;

${NavLink} {
    border: none;
}

${breakPoints.lg} {
    position: static;
    display: flex;
    flex-direction: row;
    padding-left: 3rem;
    flex-grow: 1;
}
`;