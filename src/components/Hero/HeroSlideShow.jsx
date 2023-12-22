import React from 'react';
import {nanoid} from 'nanoid';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
// import SwiperCore, { Autoplay } from 'swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import {
    HeroBackground,
    HeroTitle,
    HeroSubtTitle,
    HeroContent
} from './Hero.style.js';
import 'swiper/css';

import {GreenBtn,YellowBtn} from '../CommonComponents.styles.js';
import {imgBreakPoint} from '../../globalVars.js';


import tiny_tina from '../../media/hero_section/small/tiny_tina.jpg'
import tiny_tina_big from '../../media/hero_section/big/tiny_tina_big.jpg'

import sea from '../../media/hero_section/small/sea.jpg'
import sea_big from '../../media/hero_section/big/sea_big.jpg'

import xbox from '../../media/hero_section/small/xbox.jpg'
import xbox_big from '../../media/hero_section/big/xbox_big.jpg'

const slideShowData = [
	{
        yellowTag: 'console . cloud',
		title: 'Xbox & Bethesda Games Showcase 2022',
		subtitle: 'Streaming live on Sunday, June 12, 2022.',
		images: {
			small: xbox,
			big: xbox_big,
		},
		buttonText: 'learn more',
		leftSide: true,
	},
	{
		yellowTag: 'console . cloud',
		title: 'Tiny Tinas Wonderlands ',
		subtitle: 'Whimsy, wonder, and high-powered weaponry',
		images: {
			small: tiny_tina,
			big: tiny_tina_big,
		},
		buttonText: 'Get it Now',
	},

	{
		yellowTag: 'console . pc . cloud',
		title: 'Sea of Thieves',
		subtitle: 'Play with PC Game Pass or Ultimate',
		images: {
			small: sea,
			big: sea_big,
		},
		buttonText: 'Get it Now',
	},
]

// SwiperCore.use([Autoplay])

const HeroSlideShow = () => {
    return (
        <Swiper loop 
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          >
            {slideShowData.map(data=>{
                const {yellowTag,title,subtitle,images,buttonText,leftSide}=data;
                const {small,big}=images;

                return(
                    <SwiperSlide key={nanoid()}  >
                                   
              <HeroBackground>
                  <source media={imgBreakPoint} srcSet={big}/>
                  {/* <source media={imgBreakPoint} srcSet={seaImgSm}/> */}                  
                  <img src={small} alt=""/>
              </HeroBackground>
              <HeroContent leftSide={leftSide}>
                <YellowBtn>{yellowTag}</YellowBtn>
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtTitle>{subtitle}</HeroSubtTitle>
                <GreenBtn>{buttonText}</GreenBtn>
              </HeroContent>
            
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
  }

export default HeroSlideShow