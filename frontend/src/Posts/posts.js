import React from 'react';
import { useSelector } from 'react-redux';

const Posts=()=>{
    const posts= useSelector((state)=>state.posts);
    console.log(posts)
    return(
        <h1>possdfgts</h1>
    );
}

export default Posts;