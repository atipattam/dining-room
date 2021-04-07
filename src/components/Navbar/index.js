import React ,{useEffect, useState}  from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink, 
    NavBtnLink2
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] =useState(false)
    const changeNav = ()=> {
       if(window.scrollY >= 80) {
           setScrollNav(true)
       }else{
           setScrollNav(false)

       }
    }
    useEffect(() =>{
        window.addEventListener('scroll',changeNav)
    })
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>Dining Room</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to ="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Trend</NavLinks>
                
            </NavItem>
            <NavItem>
                <NavLinks to ="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to ="services"smooth={true} duration={500} spy={true} exact='true' offset={-80}>Service</NavLinks>
            </NavItem>
           
            <NavBtn>
                <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>SignIn</NavBtnLink>
            </NavBtn>
        </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
    );
    };

export default Navbar;
