import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import React from 'react';

const Mcheckbox = (props) => {

    const convertToDefEventPara=(name,value)=>({
        target:{
            name,value
        }
    })
    const {name,label,value,onChange}=props
    return (
        <FormControl>
           
            <FormControlLabel
            control={
                <Checkbox
                name={name}
                color="primary"
                checked={value}
                onChange={e=>onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
                
             />
        </FormControl>
    );
};

export default Mcheckbox;