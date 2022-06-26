import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';
import Header from './Header'
const useStyles=makeStyles(theme=>({
    root:{
        background:'#fdfdff'
    },
    pageheader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(3)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(3),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

const PageHeader = (props) => {
    const classes=useStyles();
    const {title, subTitle, icon}=props;
    return (
        <>
           
       <Paper elevation={0} square className={classes.root}>
           <div className={classes.pageheader}>
               <Card className={classes.pageIcon}>
                   {icon}
               </Card>
               <div>
                   <Typography className={classes.pageTitle}
                   variant='h6' component='div'>
                   {title} 
                       </Typography >
                       <Typography  className={classes.pageTitle} variant='caption' component='div' >{subTitle}</Typography>
               </div>
           </div>
       </Paper>
       </>
    );
};

export default PageHeader;