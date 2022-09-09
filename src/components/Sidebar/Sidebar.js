import React, {useContext}  from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SidebarBtnWrap,
} from './Sidebar.elements'




const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer  isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarBtnWrap>
                    <SidebarLink  onClick={toggle} to='home'>
                        Home
                    </SidebarLink>
                    </SidebarBtnWrap>

                    <SidebarBtnWrap>
                    <SidebarLink onClick={toggle} to='about'>
                        About
                    </SidebarLink>
                    </SidebarBtnWrap>
                    <SidebarBtnWrap>
                    <SidebarLink onClick={toggle} to='skills'>
                        Skills
                    </SidebarLink>
                    </SidebarBtnWrap>
                    <SidebarBtnWrap>
                    <SidebarLink onClick={toggle} to='projects'>
                        Projects
                    </SidebarLink>
                    </SidebarBtnWrap>

                    <SidebarBtnWrap>
                    <SidebarLink onClick={toggle} to='services'>
                        Services
                    </SidebarLink>
                    </SidebarBtnWrap>

                    <SidebarBtnWrap>
                    <SidebarLink  onClick={toggle} to='contact'>
                        Contact
                    </SidebarLink>
                    </SidebarBtnWrap>

                   

                </SidebarMenu>

            </SidebarWrapper>

        </SidebarContainer>
    );
};

export default Sidebar
