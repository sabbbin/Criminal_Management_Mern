import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

const Minput = (props) => {
    const {name, label, type='text',value,error=null, onChange,extra=true,...other} = props;
    // const[value1, setvalue1]=useState('');

    return (
        <TextField 
        variant='outlined'
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        size='small'
        {...other}
         disabled={!extra}
  
         {...(error&&{error:error, helperText:error})}
        />
    );
};

export default Minput;