import { Grid,Box, Typography,makeStyles } from '@material-ui/core';
import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
 } from './CatElements';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

 

const useStyles = makeStyles((theme) => ({
   
   more:{
        alignContent:"center",
        alignItems:'center',
        justifyContent:"center",
        textDecoration:'none',
        padding: "10px",
        cursor:'pointer',
        color: '#1a1359',
        textAlign:'center',
       '&:hover':{
           color: '#ff6600'
       }
  
    },

   moreContent:{
    alignContent:"center",
    alignItems:'center',
    justifyContent:"center",
    width: '150px',
  
   
    
    }

  }));

const dataCategorie = [

    {
        title: 'Nouveautés',
        path: '/detail-categorie',
        icon: <AiIcons.AiFillStar size={70} />
      },
      {
        title: 'Promotions',
        path: '/detail-categorie',
        icon: <BiIcons.BiTrendingDown size={70} />
      },
      {
        title: 'Mode accessoires',
        path: '/detail-categorie',
        icon: <GiIcons.GiAmpleDress size={70} />,
       
      },
      {
        title: 'Friperie',
        path: '/detail-categorie',
        icon: <GiIcons.GiTrousers size={70} />,
       
      },
      {
        title: 'Informatique',
        path: '/detail-categorie',
        icon: <MdIcons.MdComputer size={70} />
      },
      {
        title: 'Cuisine et maison',
        path: '/detail-categorie',
        icon: <MdIcons.MdKitchen size={70} />
      },
      {
        title: 'High-Tech',
        path: '/detail-categorie',
        icon: <FaIcons.FaMobileAlt size={70} />
      },
      {
        title: 'Sport',
        path: '/detail-categorie',
        icon: <BiIcons.BiFootball  size={70}/>
      },
      {
        title: 'Hygiène et santé',
        path: '/detail-categorie',
        icon: <GiIcons.GiHealing  size={70}/>
      },
      {
        title: 'Beauté et bien-être',
        path: '/detail-categorie',
        icon: <GiIcons.GiPerfumeBottle size={70} />
      },
      {
        title: 'Bébé',
        path: '/detail-categorie',
        icon: <FaIcons.FaBaby size={70} />
      },
      {
        title: 'Épicerie',
        path: '/detail-categorie',
        icon: <GiIcons.GiButter size={70}/>
      }
]

const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <InfoContainer lightBg={true}>
                    <InfoWrapper>
                     <Box  display="flex">
                        <Typography variant="h6" color="textPrimary" component="h5">Nos catégories</Typography>
                     </Box>
                           <Grid container spacing={3}>
                            {
                              dataCategorie.map((item,index) =>(
                                <Grid key={index} item  lg={2} sm={3} xl={4} xs={6}>
                                  <Box p={3} mt={4} className={classes.moreContent}> 
                                      <Link  to={item.path}  className={classes.more}>
                                         {item.icon}
                                        <Typography>{item.title}</Typography> 
                                        </Link>
                                  </Box>
                               </Grid> 

                              ))
                              }
                                    
                           </Grid>                      
                    </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Categories
