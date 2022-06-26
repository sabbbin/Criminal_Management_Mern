import React,{useEffect, useState} from 'react';
import './index.css'
import { useDispatch } from 'react-redux';
import { getPosts } from './action/post';
import Sidebar from './components/sidebar';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Employee from './components/pages/Employees/Employee';
import Header from './components/Header';
import LoginForm from './components/pages/Employees/loginForm';
import RegisterForm from './components/pages/Employees/RegisterForm';
import Citizen from './components/pages/display/citizen';
import {BrowserRouter as Router,Switch,Route,Link, Redirect}  from 'react-router-dom';
import Attributefun from './components/pages/attributefun';

const theme= createMuiTheme({
    palette:{
        primary:{
        main:'#333996',
        light:'#3c44b126'
    },
    secondary:{
        main:'#f83245',
        light:'#f8324526'
    }
    }
})
const useStyles=makeStyles({
    appMain:{
        paddingLeft:'300px',
        width:'100%',
      
      
    }
})
const logg= localStorage.getItem('authToken')
const ProtectedRoute=({
    component:Component, ...rest
})=>{
    return(
        <Route 
   
        {...rest}
        render={(props)=>{
           
           
            return logg!==null?<Component {...props} />:<Redirect to ={{
                pathname:'/login',
                // state:{
                //     preLocation:path,
                //     error:'you need to login first'
                // }
            }}/>
        }}
        />
    )
}


const App= ()=>{

  
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getPosts);
       
    },[dispatch])

    const classes=useStyles()
   

     
                   
      
        
    
    
    return(
      <ThemeProvider theme={theme}>
               <Sidebar />
        <div className={classes.appMain}>
          
     

     <Header title="Criminal Investigation System"  islogin={logg!==null} name={logg}/>
     <Router>
            <Switch>
                <Route  exact path='/'>
                 
                </Route>
                <Route  path='/login'>
                   
                <LoginForm />
                    </Route>
                    <Route  path='/create'>
                 
                    <Employee />
                    </Route>
                    <Route path='/register'>
                    <RegisterForm />
                    </Route>
                    <ProtectedRoute path='/display'  component={Citizen} />
                    <Route path='/display'>
                     <Citizen />

                    </Route>
            </Switch>
            </Router>
     {/* <Attributefun /> */}
     
        {/* <LoginForm /> 
   <RegisterForm />  
    <Citizen />
          <Employee />  */}
        </div>
         
    
        <CssBaseline />
      </ThemeProvider>
     
 
    )
}
export default App;
