import React from 'react';
import {GreenBtn,YellowBtn} from '../CommonComponents.styles.js';
import {imgBreakPoint} from 'globalVars.js';
import gearShopBg from 'media/other_section/gear_shop_big.jpg'
import gearShop from 'media/other_section/gear_shop.jpg'

import starWarsBig from 'media/other_section/star_wars_big.jpg'
import starWars from 'media/other_section/star_wars.jpg'

// gear_shop_big

// import bugsnax from 'media/other_section/bugsnax.jpg'
// import gamePass from 'media/other_section/gamepass.jpg'
// import empires from 'media/other_section/empires.jpg'
// import playful from 'media/other_section/playful.jpg'

// import flight from 'media/other_section/flight.jpg'
// import nba from 'media/other_section/nba.jpg'
// import minecraft from 'media/other_section/minecraft.jpg'
// import chinatown from 'media/other_section/chinatown.jpg'

// import gamePassBig from 'media/other_section/gamepass_big.jpg'
// import empiresBig from 'media/other_section/empires_big.jpg'
// import flightBig from 'media/other_section/flight_big.jpg'
// import chinatownBig from 'media/other_section/chinatown_big.jpg'

import {
    ContentBlocksCtn,
    ContentBlockColumn,
    SmallBlock,
    BigBlock,
    BlockImg,
    BlockTitle,
    BlockSubtitle,
    BlockDes,
    CtaButton,
    HorizontalBlock,
    HorizontalBlockDescription,
    StarWarsBlockDes,
    GearBlockDes
} from './ContentBlock.style.js';

import {
    firstBlockData,secondBlockData
} from './blockData.js';

const patterns=[BigBlock,SmallBlock,SmallBlock,BigBlock]


const SingleBlock=( {Parent, data} )=>(
    <Parent>
        <BlockImg>
            <img src={data.img} alt=""></img>
        </BlockImg>
        <BlockDes dark={data.dark}>
           {data.tag&&<YellowBtn>{data.tag}</YellowBtn>} 
            <BlockTitle>{data.title}</BlockTitle>
            <BlockSubtitle>{data.subtitle}</BlockSubtitle>
            <CtaButton>{data.cta}</CtaButton>
        </BlockDes>
    </Parent>
)


const Blocks = ({data})=>{
    return(
        <ContentBlocksCtn>
            <ContentBlockColumn>
                <SingleBlock Parent={patterns[0]} data={data[0]}>

                </SingleBlock>
                <SingleBlock Parent={patterns[1]} data={data[1]}>
                    
                </SingleBlock>
            </ContentBlockColumn>
            <ContentBlockColumn>
                <SingleBlock Parent={patterns[2]} data={data[2]}>

                </SingleBlock>
                <SingleBlock Parent={patterns[3]} data={data[3]}>
                    
                </SingleBlock>
            </ContentBlockColumn>
        </ContentBlocksCtn>
    )
}

const StarsWarsBlock =()=>{
    return(
    <HorizontalBlock>
        <BlockImg>
           <source media={imgBreakPoint} srcSet={starWarsBig}>

           </source> 
           <img src={starWars} alt=""></img>
        </BlockImg>
        <StarWarsBlockDes>
            <BlockTitle>Simply Next Gen</BlockTitle>
            <BlockSubtitle>
                Experice Next gen with Lego Stars Wars :The Skywalker Saga with Xbox;

            </BlockSubtitle>
            <GreenBtn>Explore Now</GreenBtn>
        </StarWarsBlockDes>
    </HorizontalBlock>
    )
}

const GearShopBlock =()=>{
    return(
    <HorizontalBlock>
        <BlockImg>
           <source media={imgBreakPoint} srcSet={gearShopBg}>

           </source> 
           <img src={gearShop} alt=""></img>
        </BlockImg>
        <GearBlockDes>
                <YellowBtn>
                    Limited Sale!
                </YellowBtn>
            <BlockTitle>Shop New Merchandise!!!</BlockTitle>
            <BlockSubtitle>
                Experice Next gen with Lego Stars Wars :The Skywalker Saga with Xbox;
            </BlockSubtitle>
            <GreenBtn>Shop Now</GreenBtn>
        </GearBlockDes>
    </HorizontalBlock>
    )
}

const ContentBlock = () => {
  return (
    <>
    <Blocks data={firstBlockData}/>
    <StarsWarsBlock/>
    <Blocks data={secondBlockData}/>
    <GearShopBlock/>
    </>

  )
}

export default ContentBlock;