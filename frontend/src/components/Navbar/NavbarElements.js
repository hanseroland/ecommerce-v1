import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice,FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
  background: #1f1615;
  height: 50px;
  display: flex;
  justify-content: center;
 
`;

export const NavLink = styled(Link)`
   color: #fff;
   font-size: 2rem;
   display: flex;
   align-items: center;
   text-decoration: none;
   cursor: pointer;

   @media screen and (max-width: 480px){
       position: absolute;
       top: 10px;
       left: 25px;
   }
`;

export const NavIcon = styled.div`
 display: block;
 position: absolute;
 top: 0;
 right: 0;
 cursor: pointer;
 color: #fff;
 justify-content: center;
 padding: 2px;
 
 
 p{
   transform: translate((175%,100%));
   font-weight: bold;
 }
`;

export const Bars = styled(FaBars)`
  font-size: 1.5rem;
  transform: translate(20%,-10%);
  
`
