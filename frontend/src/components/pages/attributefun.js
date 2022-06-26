
import { Button } from '@material-ui/core';


import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { predictAge } from '../../action/post';


// const uploadema=()=>{
//     const PythonShell = require('python-shell').PythonShell;
//     let options={
//         scriptPath:'D:/react/rem/src/components/Deeplearn/agepred/',
//         args:['17.jpg']
//     }

//     PythonShell.run('hello.py',options, function (err,res) {
//     if (err) throw err;
//     console.log('finished');
//     if (res) {
//         console.log(res)
//     }
//     });

// }

const Attributefun = () => {
    const citizens=useSelector((state)=>state.login)
    console.log(citizens)
    const [image, setImage]= useState('')
    const dispatch=useDispatch();
   const   handleclick=(e)=>{
        e.preventDefault();
         dispatch(predictAge(image))
        //  window.location.pathname='/age'
   }               
    const myhandler=(e)=>{
        setImage(e.target.files)
        console.log(e.target.files)
    }        
               
        
    
    return (
        <div>
           <h3>helodsf</h3>
           <h3>helodsf</h3>
           <h3>helodsf</h3>
            <img src={image} alt='No image' width='200' height='150'  />
              <div>
                  <input type='file'  onChange={myhandler}/>
                  <FileBase
 
                  type='file'
                  multiple={false}
                  onDone={({base64})=>setImage(base64)}
                   />
                  <Button onClick={handleclick}> predict age</Button>
              </div>
        </div>
    );
};

export default Attributefun;