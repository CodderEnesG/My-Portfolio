import styled, { keyframes } from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%) ;
  padding: 0.5rem 0 0.5rem 0;
  height:3.3rem;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    height:4rem;
  }
`;


export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${(props) => props.theme.text};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 29px;
  margin-left:10px;
  margin-right:10px;
  align-items: center;
 
  &:hover {
    list-style: none;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    transition:0.3s;
  }
`;

const Animation = keyframes`
from  {transform: rotate(0deg)};
to    {transform: rotate(360deg)};
`;
export const SocialIconLink1 = styled.a`
animation: ${Animation}  infinite 5s linear;;
height:27px;
margin-left:10px;
align-items: center;
margin-right:10px;
widht:30px;
`;
export const Img = styled.img `
height:30px;
widht:30px;
@media screen and (max-width: 820px) {
  height:30px;
  widht:30px;;
}

`
export const SocialIconLink2 = styled.a`
height:27px;
width:27px;
flex-direciton:start;
margin-top:3px;
align-items: center;
margin-right:20px;
@media screen and (max-width: 820px) {
  height:30px;
  width:30px;
}
`;


 

