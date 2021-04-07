import React from 'react'
import {Button} from '../ButtonElement';
import picture from '../../images/padthai.jpg';

import { Column2,InfoContainer,InfoRow ,
  Column1,InfoWrapper,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Img,ImgWrap} from './infoElement';

const InfoSection2 = ({lightBg,id,imgStart,topLine,
  lightText,headLine,darkText,description,buttonLabel,primary,dark,dark2,img}) => {
    return (
     <>
     <InfoContainer lightBg={lightBg} id={id}>
       <InfoWrapper>
          <InfoRow imgStart={imgStart}>
              <Column2>
              <TextWrapper>
    <TopLine>{topLine}</TopLine>
    <Heading lightText={lightText}>{headLine}</Heading> 
    <Subtitle darkText={darkText}>{description}</Subtitle> 
                <BtnWrap>
    <Button to="home" smooth={true} duration={500} 
    spy={true} exact="true" offset={-80} primary={primary ? 1: 0}
    dark={dark ? 1:0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
              </Column2>
              <Column1>
              <ImgWrap>
              
              <Img src={picture}/>
              </ImgWrap>
              </Column1>
        </InfoRow> 
       </InfoWrapper> 
     </InfoContainer>
     </>
    );
};

export default InfoSection2;
