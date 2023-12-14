import styled from 'styled-components';
import msLogo from 'media/icons/microsoft_logo.png'
import xboxLogo from 'media/icons/xbox_20.png'

import searchIcon from 'media/icons/search.png'
import hamburgerIcon from 'media/icons/hamburger.png'
import cartIcon from 'media/icons/cart.png'
import accountIcon from 'media/icons/account.svg'
import closeIcon from 'media/icons/close.png'

import {breakPoints} from '../../globalVars.js';

export const HeaderContainer = styled.header`
height:6rem;
background-color:#fafafa;
display:flex;

align-items:center;
position:relative;
`;
export const HeaderBaseIcon = styled.img`
height:2.5rem;
width:2.5rem;
cursor:pointer;
margin-right:2rem;
`;
export const HamburgerIcon = styled(HeaderBaseIcon).attrs((props)=>({
    src: props.open? closeIcon : hamburgerIcon,
}))`
object-fit:cover;
margin-left:1rem;
opacity:0.6;

${breakPoints.lg}{
    display:none;
}
`;
// In the above code line,it will inherit styles from HeaderBaseIcon.
export const MsLogoContainer = styled.div`
    flex-grow:1;
    display:flex;
    justify-content:center;
    margin-left:1rem;
`;
export const MsLogo = styled.img.attrs({
    src:msLogo
})`
width:10rem;
`;
export const XboxLogo = styled.img.attrs({
    src:xboxLogo
})`
width:7.5rem;
`;
export const SearchIcon = styled(HeaderBaseIcon).attrs({
    src:searchIcon
})`
    transform:scaleX(-1);
`;

export const CartItem = styled(HeaderBaseIcon).attrs({
    src:cartIcon
})``;

export const AccountID = styled(HeaderBaseIcon).attrs({
    src:accountIcon
})`
`;
