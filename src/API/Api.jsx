import React from 'react'
import axios from 'axios'

const url="https://jsonplaceholder.typicode.com";

export const Api=async(id)=>{
    let changeableUrl;
    if(id){
        changeableUrl=`https://jsonplaceholder.typicode.com/posts/${id}`;
    }
    else{
        changeableUrl=`https://jsonplaceholder.typicode.com/posts`;
    }
   const fetchPosts=await axios.get(`${changeableUrl}`);
   const {data}=fetchPosts;
   return data;
}

export const UserApi=async()=>{
    const userId=window.localStorage.getItem("userId");
    const fetchUserData= await axios.get(`${url}/users/${userId}`);
    const {data}=fetchUserData;
    return data;
}

export const CommentApi=async()=>{
    try{
        const id=window.localStorage.getItem("postId");
        const fetchCommentData=await axios.get(`${url}/posts/${id}/comments`)
        const {data}=fetchCommentData;
        return data;
    }
    catch(err){
        console.log("Error Ocurred",err);
    }
}
