import React, { Fragment, useState } from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import PhoneInput from 'react-phone-number-input'
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider } from "@material-ui/pickers";
import {  DatePicker } from "@material-ui/pickers";
import 'react-phone-number-input/style.css';


const Form =()=>{
 
    const [postData, setPostData]=useState({
        name:'', age:0,gender:'',phoneNo:'', address:'',
        image:'', createdAt:new Date(), email:'',
        selectedFile:'',file:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(postData)

    }
  
 

    return (
      <Paper>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <Typography variant='h6'>
                    criminal investigation
              </Typography>
              <img src={postData.selectedFile} alt='logo' width='200' height='200'  />
              <div>
                  <FileBase
 
                  type='file'
                  multiple={false}
                  onDone={({base64})=>setPostData({...postData, selectedFile:base64})}
                   />
                  
              </div>
               <TextField  required name="name" variant="outlined" label='Name' fullwidth value={postData.name} onChange={(e)=>setPostData({...postData, name:e.target.value})} />
               
   
              
               {/* <TextField name="gender" variant="outlined" label='Gender' fullwidth value={postData.gender} onChange={(e)=>setPostData({...postData, gender:e.target.value})} /> */}
                    <label>Gender</label>               
                <div>
                <input type="radio" value='Male'  onChange={(e)=>setPostData({...postData, gender:e.target.value})} name="gender" /> Male
                <input type="radio" value='Female' onChange={(e)=>setPostData({...postData, gender:e.target.value})} name="gender" /> Female
                <input type="radio" value='Other' onChange={(e)=>setPostData({...postData, gender:e.target.value})} name="gender" /> Other
                </div>
              
               <TextField name="address" variant="outlined" label='Address' fullwidth value={postData.address} onChange={(e)=>setPostData({...postData, address:e.target.value})} />
               <PhoneInput defaultCountry="NP" style={{width:'40%'}} limitMaxLength={9}  onChange={(e)=>setPostData({...postData, phoneNo:e   })} />
               {/* <MuiPhoneNumber
            name="phone"
            label="Phone Number"
            data-cy="user-phone"
            defaultCountry={"us"}
   
            onChange={(e)=>setPostData({...postData, phoneNo:e})}
          /> */}
              
               <TextField name="email" variant="outlined" label='Email' fullwidth value={postData.email} onChange={(e)=>setPostData({...postData, email:e.target.value})} />
     
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
       <DatePicker
        disableFuture
        label="Date of Birth"
        openTo="year"
        views={["year", "month", "date"]}
        value={postData.createdAt} 
        onChange={(date)=>setPostData({...postData, createdAt:date})}
        renderInput={props => <TextField {...props} />}
      />
     
    </MuiPickersUtilsProvider>

                <Button type='submit'> submit</Button>
          </form>
      </Paper>
    );
}
export default Form;