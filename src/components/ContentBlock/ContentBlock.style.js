import styled,{css} from 'styled-components';
import { breakPoints } from 'globalVars';

export const ContentBlocksCtn = styled.section`
    	display: grid;
	grid-template-columns: 1fr;
	margin-bottom: 0.5rem;
    ${breakPoints.lg}{

        grid-template-columns:1fr 1fr;
        grid-gap: 0.5rem;
    }
`;

export const ContentBlockColumn = styled.div`
    cursor: pointer;
	color: white;
	display: grid;
    grid-gap: 0;
`;

export const BlockImg = styled.picture`
& img{
    width:100%;
    display:block;
    height:auto;
}

${breakPoints}{
    height:100%;
}
`;

export const SmallBlock = styled.div`
    background-color:var(--xbox-green);
    /* background: var(--xbox-green); */

    ${breakPoints.lg}{
        display:grid;
        grid-template-columns: 1fr 1fr;
        ${BlockImg}{
        & img{
            height:350px;
        }
        }
    }
`;

export const BlockTitle = styled.h2`
	margin-top: 1rem;
font-size:2.5rem;
color:inherit;
`;

export const BlockSubtitle = styled.p`
font-size:1.8rem;
line-height:1.5;
padding-top:1.5rem;
margin-bottom:1.5rem;
color:inherit;
`;

export const CtaButton = styled.a`
/* padding: 1rem 0.3rem 0.7rem 0; */
margin-top: 0.4rem;
font-size: 1.5rem;
font-weight: 900;
	text-transform: uppercase;
	color: inherit;
	display: inline-block;
	transition: all 0.3s ease-in-out;
`;

export const BlockDes=styled.div`
color:${(props)=>(props.dark ? "black" :"white" )};
padding: 3rem 2.5vw;
`;

export const SmallContentTest = css`
		${CtaButton} {
			font-size: 2rem;
		}

		${BlockTitle} {
			font-size: 3.6rem;
		}

		${BlockSubtitle} {
			font-size: 2.5rem;
		}

`
export const MobilelContentTest = css`
		${CtaButton} {
			font-size: 1.5rem;
		}

		${BlockTitle} {
			font-size: 2.4rem;
		}

		${BlockSubtitle} {
			font-size: 1.7rem;
		}

`

export const BigBlock = styled.div`
    position:relative;
    ${BlockDes}{
        position:absolute;
        bottom:5%;
        /* left:5%; */
    }
    ${breakPoints.lg}{
        ${SmallContentTest}
    }
`;

export const HorizontalBlock = styled.section`
    position:relative;
`;

export const HorizontalBlockDescription = styled(BlockDes)`
color:black;
padding:4rem;
positon:relative;
    ${BlockTitle}{
        font-size:3rem;
    }
    ${BlockSubtitle}{
        font-size:2rem;
        line-height:1.4;
    }
`;

export const StarWarsBlockDes =  styled(HorizontalBlockDescription)`
/* position:absolute;
top:10%; */
color:black;
padding:4rem;
    ${BlockTitle}{
        font-size:3rem;

    }
    ${BlockSubtitle}{
        font-size:2rem;
        line-height:1.4;
        margin-bottom:2rem;
    }
    ${breakPoints.lg}{
        position:absolute;
        top:20%;
        left:5%;
        width:30%;
        ${BlockTitle}{
        font-size:4rem;}

            ${BlockSubtitle}{
                font-size:3rem;
                line-height:1.4;
            }
    }

`;

export const GearBlockDes =  styled(HorizontalBlockDescription)`
    ${breakPoints.lg}{
        position:absolute;
        top:20%;
        right:5%;
        width:30%;
        ${BlockTitle}{
        font-size:4rem;}

            ${BlockSubtitle}{
                font-size:3rem;
                line-height:1.4;
            }
    }
`;


