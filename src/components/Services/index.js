import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import picture from '../../images/new1.jpg'
import picture1 from '../../images/tam1.jpg'
import picture2 from '../../images/Bass1.jpg'
import picture3 from '../../images/jae1.jpg'
import {ServicesContainer,ServicesCard,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper,ServicesCardL,ServicesWrapper2} from './ServicesElement';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Team</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={picture}/>
                <ServicesH2>Mr. Vanakorn Inyai</ServicesH2>
                <ServicesP>Information Engineering</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={picture1}/>
                <ServicesH2>Mr. Atipat Krongsin</ServicesH2>
                <ServicesP>Information Engineering</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={picture2}/>
                <ServicesH2>Mr. Arthit Preedatanapirak</ServicesH2>
                <ServicesP>Information Engineering</ServicesP>
            </ServicesCard>
             <ServicesCard>

                <ServicesIcon src={picture3}/>
                <ServicesH2>Miss Sarocha Boonnawasin</ServicesH2>
                <ServicesP>Information Engineering</ServicesP>
            </ServicesCard>
          
            </ServicesWrapper>
          <ServicesWrapper2></ServicesWrapper2>
          
        </ServicesContainer>
    )
}

export default Services
