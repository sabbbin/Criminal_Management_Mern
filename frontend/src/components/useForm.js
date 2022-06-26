import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles= makeStyles((theme)=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    
    }
}))


export const useForm = (initialValues, validateOnChange=false, validate) => {
    const [values, setValues]=useState(initialValues)
    const [errors, setErrors]=useState({})
    const handleInputChange=e=>{
        const {name, value}=e.target
        setValues({...values,
        [name]:value})
        if (validateOnChange){
            validate({[name]:value})
        }
    }
   
   
    return {
       values,
        setValues,
    errors,
    setErrors,
       handleInputChange
    }
};

export const Mform=(props)=>{
    const {children, ...other}=props
    const useStyles=makeStyles(theme=>({
        root:{
            '& .MuiFormControl-root':{
                width:'80%',
                margin:theme.spacing(1)
            } 
        }
    }))
    const classes=useStyles();
return(
    <form className={classes.root} autoComplete='off' {...other}>
        {props.children}
    </form>
)
}

// <pageHeader
// title='New Employee'
// subtitle='form design with validation'
// /> 
// <Paper className={classes.pageContent}>
 
// <EmployeeForm />  
// </Paper>