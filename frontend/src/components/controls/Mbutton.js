import React from 'react';

import {Button, makeStyles} from '@material-ui/core';



const useStyles=makeStyles(theme=>({
    root: {
        margin:theme.spacing(0.5)
    },
    label: {
        textTransform:'none'
    }
}))


const Mbutton = (props) => {

    const {text, size, color, variant, onClick, ...other}= props
    const classes= useStyles();
    return (
       <Button
       variant={variant || 'contained'}
       size={size || 'large'}
       color={color|| 'primary'}
       onClick={onClick}
       {...other}
       classes={{root:classes.root, label:classes.label}}
       >
            {text}
       </Button>
    );
};

export default Mbutton;