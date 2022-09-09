import styled from 'styled-components'
import {FaTimes } from 'react-icons/fa'
import { Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
position:fixed;
z-index: 999;
width:100% ;
height:100% ;
background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); 
align-items:center;
display:grid;
top:0;
left:0;
transition: 0.3s ease-in-out;
 opacity:${({ isOpen}) => (isOpen ? '100%': '0')};
 top:${({ isOpen}) => (isOpen ? '0': '-100%')}
`

export const CloseIcon = styled(FaTimes)`
color:#fff;
`
export const  Icon =styled.div`
position: absolute;
top: 1.2rem;
right: 1.2rem;
font-size:2rem;
background: tranparent;
cursor: pointer;
outline: none;

`

export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(6,80px);
text-align:center;
@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,60px);

  }

`
export const SidebarLink = styled(LinkS)`

color: #fff;
display: block;
width: 160px!important;
height: 45px;
padding:10px 20px;
outline: none;
font-size: 18px;
border-radius: 50px;
cursor: pointer;
flex-wrap: nowrap;
background: ${(props) => props.theme.text};
justify-content:center;
align-items:center;
border: 2px solid ${(props) => props.theme.text};
transition: all 0.3s ease;
&:hover {
    color: ${(props) => props.theme.text};
    background: none;
    
  }
` 
export const SidebarBtnWrap = styled.div`
display:flex;
justify-content:center;
align-items:center;
`




