import React from 'react';
import { makeStyles } from '@material-ui/core';

import Employee from './pages/Employees/Employee';
import LoginForm from './pages/Employees/loginForm';
import RegisterForm from './pages/Employees/RegisterForm';
import Citizen from './pages/display/citizen';
import { Sidebardata } from './Sidebardata';
import { Autorenew, NoEncryption } from '@material-ui/icons';

const useStyles= makeStyles({

   

    icon:{
        flex:'30%',
        display:'grid',
        placeItems:'center'
    },
    title:{
        flex:'70%'
    }
  })



 

const Sidebar = () => {
   
  const classes= useStyles();
    
    return (
        <div className='sidemenu'> 
         
            <ul className='sidebarlist'>
                {Sidebardata.map((val,key)=>{
                    return(
                        <li key={key} 
                        id={window.location.pathname===val.link?'active':''}
                        className='row' onClick={()=>{window.location.pathname=val.link}}>
                            <div className={classes.icon}>{val.icon}</div>
                            <div className={classes.title}>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            
           
           

        </div>
    );
}; 

export default Sidebar;