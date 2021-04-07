import React from 'react'
import {Button} from '../ButtonElement';
import picture from '../../images/community.jpg';

import { Column2,InfoContainer,InfoRow ,
  Column1,InfoWrapper,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Img,ImgWrap} from './infoElement';

const InfoSection = ({lightBg,id,imgStart,topLine,
  lightText,headLine,darkText,description,buttonLabel,primary,dark,dark2,img}) => {
    return (
     <>
     <InfoContainer lightBg={lightBg} id={id}>
       <InfoWrapper>
          <InfoRow imgStart={imgStart}>
              <Column1>
              <TextWrapper>
    <TopLine>{topLine}</TopLine>
    <Heading lightText={lightText}>{headLine}</Heading> 
    <Subtitle darkText={darkText}>{description}</Subtitle> 
          
              </TextWrapper>
              </Column1>
              <Column2>
              <ImgWrap>
              
              <Img src={picture}/>
              </ImgWrap>
              </Column2>
        </InfoRow> 
       </InfoWrapper> 
     </InfoContainer>
     </>
    );
};

export default InfoSection;
