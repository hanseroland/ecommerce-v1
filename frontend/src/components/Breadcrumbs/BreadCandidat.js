import React from 'react';
import { Typography,makeStyles }from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link as RouterLink,Route} from 'react-router-dom'


const useStyles = makeStyles({
    root: {
       textDecoration: 'none',
       color:'#1a1359'
    },
  });


  
const BreadCandidat = (props) => {

    const classes = useStyles();
   
    
    return (
        <Route>
        {({ location }) => {
          
          const pathnames = location.pathname.split("/").filter(x => x);
          return (
            <Breadcrumbs aria-label="Breadcrumb">
              <RouterLink color="inherit" to="/" className={classes.root} >
                Accueil
              </RouterLink>
              {pathnames.map((value, index) => {
                const pathL = pathnames.length;
                const last = index === pathnames.length - 1;
                //const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                var to;
               // console.log(pathL,pathnames[1])
               
                  to = `/${pathnames.slice(0, index + 1).join("/")}`;
                
  
                return last ? (
                  <Typography color="textPrimary" key={to}>
                    {value}
                  </Typography>
                ) : (
                  <RouterLink color="inherit" to={to} key={to} className={classes.root}>
                    {value}
                  </RouterLink>
                );
              })}
            </Breadcrumbs>
          );
        }}
      </Route>
    )
}

export default BreadCandidat
