import axios from 'axios';

const url = "http://localhost:8000";

export const fetchPosts=()=> axios.get(url+'/posts');
export const createPost=(newPost)=>axios.post(url+'/posts',newPost);
export const registerPost=(newPost)=>axios.post(url+'/register',newPost);
export const loginPost=(newPost)=>axios.post(url+'/login', newPost);
export const predictAge=(newPost)=>axios.post(url+'/age', newPost)