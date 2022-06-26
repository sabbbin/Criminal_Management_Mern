import { TextField } from '@material-ui/core';
import React from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';

const MphoneNo = (props) => {
    
    const {name,name1,label,value,onChange}=props;
    const convertToDefEventPara=(name,value)=>({
        target:{
            name,value
        }
    })
    return (
        <PhoneInput defaultCountry={name1} value={value}
       
         limitMaxLength={9}  onChange={e=>onChange(convertToDefEventPara(name,e))} 
        
        style={{width:'300px', height:'60px' ,paddingTop:'10px'}}
        placeholder=" phone number"
             
             
         />
    );
};

export default MphoneNo;