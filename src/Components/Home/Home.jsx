import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from '../../API/Api';
import "./home.css"
import { NavLink } from 'react-router-dom';

export default function Home() {
    const [posts,setposts]=useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{
        const fetchedData=await Api();
        var res=fetchedData.map((data)=>{
            return data={...data,btn:"UpVote",class:"btn btn-success mx-3"}
        })
        setposts(res);
    },[]);
    console.log(posts);


    const btnChange=(id)=>{
        if(posts[id].btn==="UpVote"){
           const res =posts.map((post,index)=>{
                if(id===index){
                    post.btn="UnVote";
                    post.class="btn btn-danger mx-3"
                    return post;
                }
                else{
                    return post
                }
           })
           setposts(res);
        }
        else{
            const res =posts.map((post,index)=>{
                if(id===index){
                    post.btn="UpVote";
                    post.class="btn btn-success mx-3"
                    return post;
                }
                else{
                    return post
                }
           })
           setposts(res);
        }
    }

    

    const sendPostId=(id,userId)=>{
        window.localStorage.setItem("postId",id);
        window.localStorage.setItem("userId",userId);
    }

    return (
        posts.length ? 
            <div className="posts">
                {posts.map((post,index)=>{
                    let time;
                    if(index<24){
                        time=index + " hours ago";
                    }
                    else if(index>24 && index<168){
                        time=Math.floor(index/24) +" days ago"
                    }
                    return(
                        <div className="card col-11 col-xs-11 col-sm-11 col-md-5 col-lg-3 cardBox" key={post.id}>
                        <span class="badge bg-light text-dark">{time}</span>
                            <div className="card-body">
                                <h5 className="card-title" onClick={()=>sendPostId(post.id,post.userId)}><NavLink to="/post" style={{textDecoration:"none"}}>{post.title}</NavLink></h5>
                                <p className="card-text">{post.body}</p>

                                <button className={post.class} onClick={()=>btnChange(index)}>{post.btn}</button>
                                <NavLink to="/comments" className="btn btn-primary">View Comments</NavLink>
                            </div>
                        </div>
                    
                    );
                })}
            </div>
        :<></>
    )
}
