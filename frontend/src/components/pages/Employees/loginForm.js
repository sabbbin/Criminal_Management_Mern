import { Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Mcontrols from '../../controls/Mcontrols';
import {useForm,Mform }from '../../useForm';
import { useDispatch,useSelector } from 'react-redux';
import { loginPost } from '../../../action/post';
import PageHeader from '../../pageHeader';
import UsePasswordToggle from './usePasswordToggle';
import { Link, Redirect } from 'react-router-dom';


const initialValues={
    officerId:'', officerpassword:''
}
const useStyles= makeStyles((theme)=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    
    }
}))


const LoginForm = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
   
    const loginmsg=useSelector((state)=>state.login)
    // if (loginmsg[0].user){
    // //    return(
    // //     <Redirect to="/register" />);
    // }
    
    const [passinputtype, Iconed]=UsePasswordToggle();
    const validate=(fieldValues=values)=>{
        let temp={...errors}
    if('officerId' in fieldValues)
        temp.officerId=fieldValues.officerId?'':'This field is required'
    if ('officerpassword' in fieldValues)
        temp.officerpassword=values.officerpassword?'':'This field is required'
     
    setErrors({...temp})
 
    if (fieldValues==values)
        return Object.values(temp).every(x=>x=="")
}
const {values,setValues,errors, setErrors,handleInputChange}= useForm(initialValues,true, validate)
const handleSubmit=(e)=>{
    
    e.preventDefault();
    if (validate()){
   
        dispatch(loginPost(values))

       
    }

  
      }

      console.log(loginmsg.length)

    return (

        <div style={{marginTop:'60px'}}>
          <PageHeader
          title='OFFICER lOGIN'
          subTitle='enter loginid and password'
          /> 
          <Paper className={classes.pageContent}>
          <Mform  onSubmit={handleSubmit}  >
           
           <Grid container   style={{justifyContent:'center',display:'flex'}}>
         <div >

        
             <Mcontrols.Minput
               name='officerId'
               label='Officer Id'
               error={errors.officerId}
               value={values.officerId}
               onChange={handleInputChange}
               />
            
                   <Mcontrols.Minput 
                   type={passinputtype}
               name='officerpassword'
               label='Password'
               error={errors.officerpassword}
               value={values.officerpassword}
               onChange={handleInputChange}
          
               />
          {loginmsg.length!=0? <Typography   style={{color:'red'}}>{loginmsg[0].message}</Typography> 
            :''}
    
               <br/>
               
               <div style={{paddingLeft:'60%'}}>
               <Mcontrols.Mbutton 
       text='Login'
       type='submit'

       />
               </div>
      
  </div>
  <div >

  </div>


   </Grid>
      
  
  
   </Mform>  
         
          </Paper>
          
        </div>
        
  
    );
};

export default LoginForm;