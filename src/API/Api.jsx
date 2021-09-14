import React from 'react'
import axios from 'axios'

const url="https://jsonplaceholder.typicode.com/posts";
export const Api=async()=>{
   const fetchPosts=await axios.get(url);
   const {data}=fetchPosts;
   return data;
}
