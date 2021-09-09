import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useSelector } from 'react-redux';
import {
   Nav,
   NavBtn,
   Span,
   NavBtnLink,
   NavIcon,
   NavItem,
   NavLinkR,
   NavMenu,
   SidebarNav,
   SidebarWrap,
   ButtonClick
   }
from './SidebarElements';
import { Badge, MenuItem, Select, TextField,makeStyles } from '@material-ui/core';
import {FaSearch} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({

  textField:{
    height:'35px',
    backgroundColor: "#FFF",
    width:"100%",
    margin: theme.spacing(1),

  },
  selectStyle:{
    height:'35px',
    backgroundColor: "#FFF",
    margin: theme.spacing(1),
  }

}));


export const getCat = ()=>([
  { id: '1',  title: 'Nouveautés' },
  { id: '2', title: 'Promotions' },
  { id: '3', title: 'Mode et accessoires' },
  { id: '4', title: 'Friperie' },
  { id: '5', title: 'Informatique' },
  { id: '6', title: 'Cuisine et maison' },
  { id: '7', title: 'Hight-Tech' },
  { id: '8', title: 'Sport' },
  { id: '9', title: 'Hygiène et Santé' },
  { id: '10', title: 'Beauté et bien-être' },
  { id: '11', title: 'Bébé' },
  { id: '12', title: 'Épicerie' },
]);


const Sidebar = () => {

  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon >
            <FaIcons.FaBars onClick={showSidebar} />
            <NavLinkR  to="/" >ecommerce</NavLinkR>
          </NavIcon>

          <NavMenu>
            <NavItem>

                  <Select
                      name="ville_offre"
                      disableUnderline
                      variant="outlined"
                      fullWidth
                      className={classes.selectStyle}
                     >
                        {
                           getCat().map(
                              item => (<MenuItem key={item.id} value={item.title.toLocaleLowerCase()}>{item.title}</MenuItem>)
                            )
                         }
                     </Select>
            </NavItem>
            <NavItem>
                <Span><FaSearch/></Span>
                <TextField
                  variant="outlined"
                  label="(entrer un mot clé)"
                  name="categorie"
                  size="small"
                  className={classes.textField}
                  disableUnderline
                >
                </TextField>
            </NavItem>
            <ButtonClick >
                Rechercher
           </ButtonClick>
          </NavMenu>
          <NavBtn>
            <NavIcon to='#'>
              <Badge badgeContent={4} color="error"
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              >
                 <AiIcons.AiOutlineShoppingCart  />
              </Badge>
              Panier
            </NavIcon>
            {userInfo ? (
              <NavIcon to='#'>
                 <FaIcons.FaUser/>
                  {userInfo.nom}
              </NavIcon>
            ) : (
              <NavIcon to='/signin'>
                  <FaIcons.FaUser  />
                  Se connecter
              </NavIcon>
            )}
            
          </NavBtn>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
