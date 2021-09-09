import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

const GradientBtn = (props) => {
  const styles = useGradientBtnStyles();
  return (
    <div>
      <div>  
        <Button onClick={props.onclick}   classes={styles}>
            {props.nom}
        </Button>
      </div>
    </div>
  );
};

export default GradientBtn;