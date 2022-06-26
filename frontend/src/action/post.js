
import * as api from '../api';
import { browserHistory } from 'react-router';
import  { Link, Redirect } from 'react-router-dom'
export const getPosts= ()=>async(dispatch)=>{
    try{
        const {data}= await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload:data})
    }
    catch(error){
        console.log(error.message)
    }
 
}



export const createPost=(post)=>async(dispatch)=>{
    try{
            const {data}= await api.createPost(post)
            dispatch({type:'CREATE', payload:data});
        }
    catch(error){
            console.log(error)
    }
}
export const predictAge=(post)=>async(dispatch)=>{
    try{
        const {data}= await api.predictAge(post);
        dispatch({type:'AGE', payload:data});

    }
    catch(error){
        console.log(error)
    }
}
export const registerPost=(post)=>async(dispatch)=>{
    try{
        const {data}= await api.registerPost(post);
        dispatch({type:'REGISTER', payload:data});

    }
    catch(error){
        console.log(error)
    }
} 
export const loginPost=(post)=>async(dispatch)=>{
    try{ 
        const res= await api.loginPost(post);
        dispatch({
            type: "LOGIN",
             payload:  {user: res.data.user, message:res.data.message }
          })
          if (res.data.user!=undefined){
            localStorage.setItem("authToken", res.data.user)
      
            window.location.pathname='/display'
      
        }
        console.log(res.data.message)
        // dispatch({type:'LOGIN',
        // payload:{user}})
        // console.log(data)
    }
    catch(error)
    {
    //     dispatch({
    //         type: "AUTH_ERROR",
    //         payload:  {error} ,
    //       })
          console.log('helo')
          console.log(error)
    }
}