import * as React from 'react';
import {AppBar,Box, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import { Redirect } from 'react-router-dom';


export default function Header(props) {
    const {title,islogin, name}=props;
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" >
        <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton> */}
          <Typography style={{display:'inline'}} variant="h6" component="div"  sx={{ flexGrow: 1 }}>
          {title}
          </Typography>
          <div >
          {islogin?<Typography style={{display:'inline'}} variant="caption" component="div"  sx={{ flexGrow: 1 }}>
         Welcome, {name}
          </Typography>:''}
          
          {islogin?

          <Button color="inherit" onClick={()=>{localStorage.removeItem('authToken')
        window.location.pathname='/login'
          }}>Logout</Button> :<Button color="inherit" >Login</Button> }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}