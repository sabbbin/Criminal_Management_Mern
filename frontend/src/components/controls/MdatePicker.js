import React from 'react';
import {MuiPickersUtilsProvider } from "@material-ui/pickers";
import {  DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';







const MdatePicker = (props) => {

    const {name,label,value,onChange}=props;
    const convertToDefEventPara=(name,value)=>({
        target:{
            name,value
        }
    })
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
   
        <DatePicker    variant='inline' inputVariant='outlined'
         disableFuture
         name={name}
         label={label}
       
         openTo="year"
         views={["year", "month", "date"]}
         value={value} 
         size='small'
         onChange={date=>onChange(convertToDefEventPara(name, date))}
        //  renderInput={props => <TextField {...props} />}
       />
      
     </MuiPickersUtilsProvider>
    );
};

export default MdatePicker;