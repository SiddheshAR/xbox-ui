import styled from 'styled-components';
import {imgBreakPoint,breakPoints} from '../../globalVars.js';


export const HeroContainer = styled.section`
width:100%;
position:relative;

`;

export const HeroBackground = styled.picture`
& > img{
    width:100%;
    height:auto;
    object-position:top center;
    max-height:120rem;
}
`;

export const HeroTitle = styled.h2`
font-size:3.4rem;
line-height:1.3;
font-weight:bold;
padding-top:1rem ;

`;

export const HeroSubtTitle = styled.h4`
font-size:2.1rem;
font-weight:400;
line-height:1.4;
padding:1.5rem 0;

`;

export const HeroContent = styled.div`
position:absolute;
bottom:10%;
left:50%;
transform:translateX(-50%);
text-align:center;
width:80%;
z-index:10;
color:white;
${breakPoints.lg}{
    bottom:30%;
    width:40%;
    text-align:left;
    transform:translateX(0%);
    left:${(props)=>(props.leftSide ? '10%':'60%')};
}
`;



