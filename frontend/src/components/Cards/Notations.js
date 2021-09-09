import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default function Notations(props) {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" display="flex" mb={3} borderColor="transparent">
        
        <Rating  
          style={{fontSize:16}}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography style={{fontSize:13}}  variant="subtitle1" >( {props.note} avis)</Typography>
      </Box>
    </div>
  );
}
