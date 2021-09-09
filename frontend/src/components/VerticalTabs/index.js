import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import ProductImg from '../Cards/ProductImg';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {Img} = props

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(0)}/>
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(1)} />
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(2)} />
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(3)} />
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(4)} />
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(5)} />
        <Tab  icon={ <Avatar  alt="image 1"  src={require(`../../images/articles/${Img}`).default} />} {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
          <ProductImg  image={require(`../../images/articles/${Img}`).default} />
         
      </TabPanel>
      <TabPanel value={value} index={1}>
          <ProductImg  image={require(`../../images/articles/${Img}`).default} />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <ProductImg  image={require(`../../images/articles/${Img}`).default} />
      </TabPanel>
      <TabPanel value={value} index={3}>
           <ProductImg  image={require(`../../images/articles/${Img}`).default} />
      </TabPanel>
      <TabPanel value={value} index={4}>
         <ProductImg  image={require(`../../images/articles/${Img}`).default} />
      </TabPanel>
      <TabPanel value={value} index={5}>
         <ProductImg  image={require(`../../images/articles/${Img}`).default} />
      </TabPanel>
      <TabPanel value={value} index={6}>
         <ProductImg  image={require(`../../images/articles/${Img}`).default} />
      </TabPanel>
    </div>
  );
}
