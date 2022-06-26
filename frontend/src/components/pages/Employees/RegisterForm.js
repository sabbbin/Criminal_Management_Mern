import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Mcontrols from '../../controls/Mcontrols';
import {useForm,Mform }from '../../useForm';
import { useDispatch } from 'react-redux';
import { registerPost } from '../../../action/post';
import PageHeader from '../../pageHeader';

const initialValues={
    officerId:'', officerpassword:'', officerconformpass:''
}
const useStyles= makeStyles((theme)=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    
    }
}))


const RegisterForm = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
   
    const validate=(fieldValues=values)=>{
    let temp={...errors}
    if('officerId' in fieldValues)   
        temp.officerId=fieldValues.officerId?'':'This field is required'
    if ('officerpassword' in fieldValues)
        temp.officerpassword=fieldValues.officerpassword?'':'This field is required'
    if ('officerconformpass' in fieldValues)
        temp.officerconformpass=fieldValues.officerconformpass?'':'this is required'
    setErrors({...temp})
    if (fieldValues == values)
        return Object.values(temp).every(x=>x=="")
}
const {values,setValues,errors, setErrors,handleInputChange}= useForm(initialValues,true, validate)
const handleSubmit=(e)=>{
    e.preventDefault();
    if (validate()){
        if (values.officerpassword===values.officerconformpass){
            dispatch(registerPost(values))
            window.location.pathname='/login'
        }else
        {
            console.log('error')
        }
       
    }
        
      
}
    return (

        <div style={{marginTop:'60px'}}>
          <PageHeader
          title='OFFICER Registration'
          subTitle='Officer info are registered'
          /> 
          <Paper className={classes.pageContent}>
          <Mform  onSubmit={handleSubmit}  >
         
         <Grid container style={{paddingLeft:'24%', width:"76%"}}  >
       
 
            
                 <Mcontrols.Minput
                   name='officerId'
                   label='Officer Id'
                   error={errors.officerId}
                   value={values.officerId}
                   onChange={handleInputChange}
                   />
                       <Mcontrols.Minput 
                       type='password'
                   name='officerpassword'
                   label='Password'
                   error={errors.officerpassword}
                   value={values.officerpassword}
                   onChange={handleInputChange}
                   />
                    <Mcontrols.Minput 
                      type='password'
                   name='officerconformpass'
                   label='Confrom Password'
                   error={errors.officerconformpass}
                   value={values.officerconformpass}
                   onChange={handleInputChange}
                   />
   
      <div style={{paddingLeft:'58%'}}>
      <Mcontrols.Mbutton 
           text='Register'
           type='submit'
 
           />
      </div>
 
   
       </Grid>
    
       </Mform>
         
          </Paper>
          
        </div>
        
    );
};

export default RegisterForm;