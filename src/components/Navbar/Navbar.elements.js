import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
background: black; 
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index:10;
@media screen and (max-width: 1070px) {
 transition:0.8 all ease;

}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1500px;
z-index:1;
`;

export const NavLogo = styled(LinkS)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-family:"Ubuntu" sans-serif !important;
  display: flex;
  list-style: none;
  align-items: center;
  @media screen and (max-width: 1070px) {
    position: absolute;
    top: 0;
    font-size: 1.75rem;
    left: 0;
    transform: translate(25%, 50%);

  }
  &:hover {
    list-style: none;
    text-decoration: none;
    color:white;
  }
`;


export const Circle = styled.div`
background: ${(props) => props.theme.text};
border-radius: 50%;
width: 0.6rem;
height: 0.6rem;
float: right;
margin-top: 13px !important;
justify-content: space-between;
margin-left: 3px;
`;




export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1070px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
  }
`;

export const NavMenu = styled.ul`
display: grid;
grid-template-columns: repeat(6, auto);
grid-gap: 10px;
list-style: none;
text-align: center;
width: 60vw;
justify-content: end;
margin-right: 2rem;

  @media screen and (max-width: 1070px) {
    display:none
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

`;


export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
cursor: pointer;
height: 100%;
font-family: 'Ubuntu', sans-serif;

    &.active {
        border-bottom: 4px solid ${(props) => props.theme.text};
        transition: all 0.2s ease-out;
        color: ${(props) => props.theme.text}
    
  }
  &:hover {
    list-style: none;
    text-decoration: none;
    color:white;
  }
`;

