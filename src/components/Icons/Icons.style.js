import styled from 'styled-components';


export const IconsContainer = styled.section`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
    width:90%;
    margin:0 auto;
    grid-row-gap:3rem;
    justify-items:center;
    padding:3rem 0;
    max-width:90rem;
`;
export const IconText = styled.p`
color:green;
border-bottom:0.7rem solid transparent;
font-size:1.4rem;
font-weight:bold;
transition: 0.4s ease-in-out;
padding:0.5rem 0;
`;


export const IconService = styled.a`
    display:grid;
    justify-items:center;
    width:10rem;
    &:hover ${IconText} {
        border-color:green ;
    }
`;

