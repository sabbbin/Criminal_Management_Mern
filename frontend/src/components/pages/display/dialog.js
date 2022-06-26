import React from 'react';
import { Dialog, DialogTitle,DialogContent, Button, DialogActions, Grid, makeStyles } from '@material-ui/core';
import Mcontrols from '../../controls/Mcontrols'

const useStyles=makeStyles(theme=>({
    dialogWrapper:{
        padding:theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    }
}))
const Dialogd = (props) => {
    const classes=useStyles()
    const handleClickOpen = () => {
        setopenPopup(true);
      };
    
      const handleClose = () => {
        setopenPopup(false);
      };
   const {title, values, openPopup,setopenPopup}=props
console.log(values)
   return (<>
        <Dialog open={openPopup} maxWidth='md' classes={{paper:classes.dialogWrapper}} onClose={handleClose}>
        <DialogTitle>Citizen Info</DialogTitle>
        <DialogContent>
          
        <Grid container>
              <Grid item xs={4}>
              <img src={values.selectedFile} alt='No image' width='200' height='150'  />
             
              
                     <Mcontrols.Minput style={{padding:'3px'}}  
                  name='name'
                  label='Name'
             
                  value={values.name}
               
                  />
                   
                   <Mcontrols.Minput style={{padding:'3px'}} 
                  name='Taddress'
                  label=' Current address'
                  value={values.Taddress}
                
                  />
                   
                    <Mcontrols.Minput style={{padding:'3px'}} 
                  name='Paddress'
                  label='Permanent address'
                  value={values.Paddress}
                 
                  />
                   </Grid>
                    <Grid  item xs={4}>
                     <Mcontrols.Minput style={{padding:'3px'}} 
               name='provinaced'
               label='Provinace'
               value={values.provinaced}
              
               />
                
               <Mcontrols.Minput style={{padding:'3px'}} 
               name='district'
               label='District'
               value={values.district}
               
               />
                   <Mcontrols.Minput style={{padding:'3px'}} 
                  name='municipality'
                  label='Gp/Np-wardNo'
                  value={values.municipality}
                  
                  />
            
                 
            

              <Mcontrols.Minput style={{padding:'3px'}} 
                  name='fatherN'
                  label='Father Name'
                  value={values.fatherN}
              
                  />
                   <Mcontrols.Minput style={{padding:'3px'}} 
                  name='motherN'
                  label='Mother Name'
              
                  value={values.motherN}
                 
                  />

              <Mcontrols.Minput style={{padding:'3px'}} 
                  name='gender'
                  label='Gender'
                  value={values.gender}
               
                  />
                                     </Grid>
<Grid  item xs={4}>
                  <Mcontrols.Minput style={{padding:'3px'}} 
                  name='isMarried'
                  label="IsMarried"
               
                  value={values.isMarried}
          
                  />
                   <Mcontrols.Minput style={{padding:'3px'}}   
                    extra={values.isMarried}
                  name='wifeN'
                  label='Wife Name'
                  value={values.wifeN}
             
              
                  />

                    <Mcontrols.Minput style={{padding:'3px'}} 
                  name='Qualification'
                  label='Qualification'
                
                  value={values.Qualification}
                
                  />
                   <Mcontrols.Minput style={{padding:'3px'}} 
                  name='citizenshipNo'
                  label='Citizenship No'
                  value={values.citizenshipNo}
                
                  />
                  <Mcontrols.Minput style={{padding:'3px'}} 
                  name='dateofbirth'
                  label='Date of Birth'
                  value={values.dateofbirth}
              
                  />
                <Mcontrols.Minput style={{padding:'3px'}} 
                name='phoneNo'
                value={values.phoneNo}
                label='phone no'
             
               />   
         

              </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
         
        </DialogActions>
      </Dialog>
      </>
    );
};

export default Dialogd;