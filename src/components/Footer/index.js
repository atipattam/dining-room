import React from 'react'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,WebsiteRights, SocialLogo} from  './FooterElement'
const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                   <FooterLinkItems>
                     
                        
                   </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialLogo>Dining Room</SocialLogo>
    <WebsiteRights>Dining Room {new Date().getFullYear()} All rights reserved</WebsiteRights>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
