import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} 
    from './SidebarElement';
const Sidebar = ({ isOpen, toggle }) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon/>     
        </Icon>  
        <SidebarWrapper>
         <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>about</SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>discover</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>services</SidebarLink>
           
         </SidebarMenu> 
         <SideBtnWrap >
             <SidebarRoute to="/signin">Sign In</SidebarRoute>
             </SideBtnWrap>  
        </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar;
