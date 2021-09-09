import React from 'react'
import { NavPub, NavPubContainer, NavPubLogo,NavPubMenu ,MobileIcon,NavBtnLink,NavBtn,LogoImg} from './NavpubElement'
import {FaBars} from 'react-icons/fa'
import Img from '../../../assets/logo/new-logo-jobsgabon-1.png'



const Navbarpub = ({toggle}) => {

  
    return (
        <NavPub>
             <NavPubContainer>
                {/* <NavPubLogo to="/"  onClick={toggleHome}>
                    <LogoImg src={Img} alt="logo JOBSGABON" />
                 </NavPubLogo>
                 <MobileIcon  onClick={toggle} >
                        <FaBars />
                 </MobileIcon>*/}
                 <NavPubMenu> 
                       {/* <NavPubImg /> */}
                        <h1>PUBLICITE</h1>
                 </NavPubMenu>
             </NavPubContainer>
              {/* <NavBtn>
                    <NavBtnLink to="/recruteur">
                        Accès recruteur
                    </NavBtnLink>
              </NavBtn> */}
        </NavPub>
    ) 
}

export default Navbarpub
