import React from 'react';
// import styled from 'styled-components';
import Header from './components/Headers/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Icons from './components/Icons/Icons.jsx';
import ContentBlock from './components/ContentBlock/ContentBlock.jsx';

import FooterCtn from './components/Footer/Footer.jsx';


const App = () => {
  return (
  <>
    <Header/>
    <Hero/>
    <Icons/>
    <ContentBlock/>
    <FooterCtn/>
  </>
  )
}

export default App