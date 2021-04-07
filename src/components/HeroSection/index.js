import React,{useState} from 'react'
import Video from '../../videos/video.mp4'

import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroBtnWrapper,HeroP,ArrowForward ,ArrowRight, NavBtnLink} from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        
    }

    return (
      <HeroContainer id="home">
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>  
          </HeroBg>
          <HeroContent>
          <HeroH1>Dining Room Have made my day</HeroH1>
          <HeroP>
              Sign up for a new account today and Let start your Journey.
          </HeroP>
          <HeroBtnWrapper>
              <NavBtnLink to='/signin' onMouseEnter = {onHover} 
              onMouseLeave = {onHover}
              primary='true'
              dark='true'
              >
                  Get started {hover ? <ArrowForward/> : <ArrowRight/>}
              </NavBtnLink>
          </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
    )
}

export default HeroSection;
