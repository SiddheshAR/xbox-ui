import {styled} from 'styled-components';

export const Footer = styled.footer`
    background-color:#f2f2f2;
    padding:2rem;
    padding-left:3rem;
    padding-bottom:4rem;
`;

export const FooterLink = styled.a`
    margin-right:3rem;
    color:#616161;
    font-size:1.1rem;
    line-height:1.6;
    text-transform:Capitalize;
    padding-top:0.6rem;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`;

export const FooterLegalLinks = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:2rem;
`;

export const FooterLinksContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

export const FooterColumn=styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:40rem;
    ${FooterLink}{
        display:block;
        margin-bottom:1.5rem;
    }
`;

export const FooterColumnTitle = styled.h3`
    font-weight:bold;
    padding-top:3rem;
    font-size:1.5rem;
    /* color:#616161; */
`;


