import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../pageHeader';
import { makeStyles, Paper } from '@material-ui/core';
import Citizen from '../display/citizen';
import Dialogd from '../display/dialog';


const useStyles= makeStyles((theme)=>({
    pageContent:{
        margin:theme.spacing(4),
        padding:theme.spacing(3),
        justifyContent:'center'
    
    }
}))

const Employee = () => {
    const classes= useStyles();
    return (
        <div style={{marginTop:'60px'}}>
          <PageHeader
          title='Citizen Registration'
          subTitle='citizen info are registered'
          /> 
          <Paper className={classes.pageContent}>
          
          <EmployeeForm />  
          </Paper>
          
        </div>
    );
};

export default Employee;