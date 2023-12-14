import React from 'react';
import  { useState } from 'react'
import Navigation from "../Navigation/Navigation.jsx";
import {HamburgerNavigation, NavigationOnBigScreen} from "../Navigation/Navigation.style.js";

import {
  HeaderContainer,
  HeaderBaseIcon,
  HamburgerIcon,
  MsLogoContainer,
  MsLogo,
  XboxLogo,
  SearchIcon,
  CartItem,
  AccountID
} from './Header.styles.js'

import styled from 'styled-components';


const NavigationContainer = () =>{
  const [open, setOpen] = useState(false);
  return (<>
			<HamburgerIcon open={open} onClick={() => setOpen((prev) => !prev)} />

{open && <Navigation Parent={HamburgerNavigation} />}
  </>)
}

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationContainer/>
      <MsLogoContainer>
        <MsLogo/>
      </MsLogoContainer>
      <XboxLogo/>
      <Navigation Parent={NavigationOnBigScreen}/>
      <SearchIcon/>
      <CartItem/>
      <AccountID/>
    </HeaderContainer>

  )
}

export default Header