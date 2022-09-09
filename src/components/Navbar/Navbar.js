import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import './navbar.css'
import {
  
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Circle,
  NavLogo,
  Nav,
  
} from './Navbar.elements';

function Navbar( { toggle ,  }) {
  const[nav,setNav] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNav(true)
      
    }else{
      setNav(false)
    }
  }

  window.addEventListener('scroll',changeBackground)

  

  return (
    
    <>
       
        <Nav className={nav ? 'nav active' : 'nav' } >
          <NavbarContainer  >
            <NavLogo smooth={true} duration={500} spy={true} exact='true' offset={-80} to='home' >
             
              CodderEnesG <Circle></Circle>
            </NavLogo>
            <MobileIcon onClick={toggle} >
            <FaBars />
            </MobileIcon>
            <NavMenu >
              <NavItem>
                <NavLinks className="nav-links" to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks  to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  Projects
                </NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  Contact
                </NavLinks>
              </NavItem>
            
            
            </NavMenu>
          </NavbarContainer>
        </Nav>
     
    </>
  );
}

export default Navbar;
