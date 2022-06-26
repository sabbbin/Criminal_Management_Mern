import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { parseWithOptions } from 'date-fns/fp';
import React, { useEffect, useState } from 'react';

const Mselect = (props) => {

  

    const {label, name, value, error=null,onChange,options,dep=null}=props
  
var abc=[]

{name==='district'?(abc=options.filter(
    (o) =>{return o.province_id===dep}
           
   
 )):(abc=options)}

// const abc=options.filter(
//          (o) =>{return o.province_id===aselect}
                
        
//       );



    return (
       <FormControl
       variant='outlined'
       {...(error&&{error:true})}
       >
        <InputLabel>{label}</InputLabel>
        <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        >
            <MenuItem value=''>None</MenuItem>
            {
                abc.map(
                    item=>(
                        // console.log(typeof(item.name))
                        // (item.id==1)&&<MenuItem key={item.id} value={item.name} name={item.name} />
                        < MenuItem key={item.id} value={item.name}  >
                        {item.name}
                            </MenuItem>
                    )
                )
            }
        </Select>
        {error&& <FormHelperText>{error}</FormHelperText>}
       </FormControl>
    );
};

export default Mselect;