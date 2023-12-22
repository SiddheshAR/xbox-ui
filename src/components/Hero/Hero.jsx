import React from 'react'
import {GreenBtn,YellowBtn} from '../CommonComponents.styles.js';
import {
    HeroContainer,
    HeroBackground,
    HeroTitle,
    HeroSubtTitle,
    HeroContent
} from './Hero.style.js';
import {imgBreakPoint} from '../../globalVars.js';
import seaImgLg from '../../media/hero_section/big/sea_big.jpg';
import seaImgSm from '../../media/hero_section/small/sea.jpg';
import HeroSlideShow from './HeroSlideShow.jsx';

const Hero = () => {
  return (
    <div>
        <HeroContainer>
          <HeroSlideShow/>
        </HeroContainer>
    </div>
  )
}

export default Hero