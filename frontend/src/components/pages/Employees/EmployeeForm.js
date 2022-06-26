import { Grid, makeStyles, requirePropFactory, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import Mcontrols from '../../controls/Mcontrols'
import MradioGroup from '../../controls/MradioGroup';
import {useForm,Mform }from '../../useForm';
import { getDistrict ,getprovinace} from '../../services/employeeService';
import Mbutton from '../../controls/Mbutton';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../action/post';
import { LaptopWindowsRounded } from '@material-ui/icons';

const initialValues={
    name:'', isMarried:false,gender:'male',phoneNo:'', Paddress:'', Taddress:''
    ,fatherN:'',motherN:'',Qualification:'', wifeN:'',
    citizenshipNo:'',
        selectedFile:process.env.PUBLIC_URL + '/assets/images/uploadimage.JPG',
         dateofbirth:new Date(),district:'',provinaced:'',municipality:''
 
}


const genderoptions=[
    {id:'male', name:'Male' },
    {id:'female' ,name:'Female'},
    {id:'other', name:'Other'}
]


const EmployeeForm = () => {
   
    const dispatch=useDispatch();
    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if ('name' in fieldValues)
          temp.name=fieldValues.name?'':'This field is required'
        if ('phoneNo' in fieldValues)
          temp.phoneNo=fieldValues.name?'':'This field is required'
        if ('Paddress' in fieldValues)
          temp.Paddress=fieldValues.Paddress?'':'This field is required'
        if ('Taddress' in fieldValues)
          temp.Taddress=fieldValues.Taddress?'':'This field is required'
        if ('municipality' in fieldValues)
          temp.municipality=fieldValues.municipality?'':'This field is required'
        if ('district' in fieldValues)
          temp.district=fieldValues.district?'':'This field is required'
        if ('provinaced' in fieldValues)
          temp.provinaced=fieldValues.provinaced?'':'This field is required'
        if ('fatherN' in fieldValues)
          temp.fatherN=fieldValues.fatherN?'':'This field is required'
        if ('motherN' in fieldValues)
          temp.motherN=fieldValues.motherN?'':'This field is required'
        if ('Qualification' in fieldValues)
          temp.Qualification=fieldValues.Qualification?'':'This field is required'
        if ('citizenshipNo' in fieldValues)
          temp.citizenshipNo=fieldValues.citizenshipNo?'':'This field is required'
        if ('wifeN' in fieldValues)
          temp.wifeN=fieldValues.isMarried?'This field is required':''
        setErrors({...temp})
        if (fieldValues==values)
          return Object.values(temp).every(x=>x=="")
    }
    const {values,setValues,errors, setErrors,handleInputChange}= useForm(initialValues,true, validate)
   const handleInputChange1=(e)=>{
     {e.target.value?setValues({...values,isMarried:e.target.value}):setValues({...values,isMarried:e.target.value,wifeN:''})}
   }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (validate())
            dispatch(createPost(values))
            window.location.pathname='/display'
          
    }
  // console.log(errors)
 
    return (
      <Mform  onSubmit={handleSubmit}>
          <Grid container>
              <Grid item xs={6}>
              <img src={values.selectedFile} alt='No image' width='200' height='150'  />
              <div>
                  <FileBase
 
                  type='file'
                  multiple={false}
                  onDone={({base64})=>setValues({...values, selectedFile:base64})}
                   />
                  
              </div>
              
                     <Mcontrols.Minput 
                  name='name'
                  label='Name'
                  error={errors.name}
                  value={values.name}
                  onChange={handleInputChange}
                  />
                   
                   <Mcontrols.Minput
                  name='Taddress'
                  label=' Current address'
                  value={values.Taddress}
                  onChange={handleInputChange}
                  error={errors.Taddress}
                  />
                    <Mcontrols.Minput
                  name='Paddress'
                  label='Permanent address'
                  value={values.Paddress}
                  error={errors.Paddress}
                  onChange={handleInputChange}
                  />
                     <Mcontrols.Mselect 
               name='provinaced'
               label='Provinace'
               value={values.provinaced}
               error={errors.provinaced}
               onChange={handleInputChange}
               options={getprovinace()}
               />
                  
               <Mcontrols.Mselect 
               name='district'
               label='District'
               value={values.district}
               error={errors.district}
               onChange={handleInputChange}
               options={getDistrict()}
               dep={values.provinaced}
               />
                   <Mcontrols.Minput
                  name='municipality'
                  label='Gp/Np-wardNo'
                  value={values.municipality}
                    error={errors.municipality}
                  onChange={handleInputChange}
                  />
            
                 
              </Grid>
              <Grid item xs={6}>

              <Mcontrols.Minput
                  name='fatherN'
                  label='Father Name'
                  value={values.fatherN}
                  error={errors.fatherN}
                  onChange={handleInputChange}
                  />
                   <Mcontrols.Minput
                  name='motherN'
                  label='Mother Name'
                  error={errors.motherN}
                  value={values.motherN}
                  onChange={handleInputChange}
                  />
              <Mcontrols.MradioGroup
                  name='gender'
                  label='Gender'
                  value={values.gender}
                  items={genderoptions}
                  onChange={handleInputChange}
                  />
                  <Mcontrols.Mcheckbox 
                  name='isMarried'
                  label="IsMarried"
               
                  value={values.isMarried}
                  onChange={handleInputChange1}
                  />
                   <Mcontrols.Minput  
                    extra={values.isMarried}
                  name='wifeN'
                  label='Wife Name'
                  value={values.wifeN}
                  error={errors.wifeN}
                  onChange={handleInputChange}
                  />
                    <Mcontrols.Minput
                  name='Qualification'
                  label='Qualification'
                  error={errors.Qualification}
                  value={values.Qualification}
                  onChange={handleInputChange}
                  />
                   <Mcontrols.Minput
                  name='citizenshipNo'
                  label='Citizenship No'
                  value={values.citizenshipNo}
                  error={errors.citizenshipNo}
                  onChange={handleInputChange}
                  />
                  <Mcontrols.MdatePicker
                  name='dateofbirth'
                  label='Date of Birth'
                  value={values.dateofbirth}
                  onChange={handleInputChange}
                  />
                <Mcontrols.MphoneNo 
                name='phoneNo'
                name1='NP'
                label='phone no'
                value={values.phoneNo}
                error={errors.phoneNo}
                onChange={handleInputChange}/>   
                  <Mbutton 
          text='Submit'
          type='submit'

          />

              </Grid>
          </Grid>
        
      </Mform>
    );
};

export default EmployeeForm;