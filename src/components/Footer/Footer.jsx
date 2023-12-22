import React from 'react'

import {Footer,
    FooterLink,
    FooterLegalLinks,
    FooterLinksContainer,
    FooterColumn,
    FooterColumnTitle
} from './Footer.style.js';

const FooterCtn = () => {
  return (
    <>
        <Footer>
            <FooterLinksContainer>
                <FooterColumn>
                    <FooterColumnTitle>Browse</FooterColumnTitle>
                    <FooterLink>Xbox Consoles</FooterLink>
                    <FooterLink>Xbox Games</FooterLink>
                    <FooterLink>Xbox Game Pass</FooterLink>
                    <FooterLink>Xbox Accessory</FooterLink>
                </FooterColumn>

                <FooterColumn>
                <FooterColumnTitle>Browse</FooterColumnTitle>
                    <FooterLink>Xbox Consoles</FooterLink>
                    <FooterLink>Xbox Games</FooterLink>
                    <FooterLink>Xbox Game Pass</FooterLink>
                    <FooterLink>Xbox Accessory</FooterLink>
                </FooterColumn>

                <FooterColumn>
                <FooterColumnTitle>Browse</FooterColumnTitle>
                    <FooterLink>Xbox Consoles</FooterLink>
                    <FooterLink>Xbox Games</FooterLink>
                    <FooterLink>Xbox Game Pass</FooterLink>
                    <FooterLink>Xbox Accessory</FooterLink>                
                </FooterColumn>
            </FooterLinksContainer>
            <FooterLegalLinks>
                    <FooterLink> Pass</FooterLink>

                    <FooterLink>Xbox Consoles</FooterLink>
                    <FooterLink>Xbox Accessory</FooterLink>  
                    <FooterLink>Xbox Consoles</FooterLink>
                    <FooterLink>Xbox Games</FooterLink>
                    <FooterLink>Xbox Game</FooterLink>
                    <FooterLink>Xbox Consoles</FooterLink>  
            </FooterLegalLinks>
        </Footer>
    </>
  )
}

export default FooterCtn