import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from '../../API/Api';
import "./home.css"
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';

export default function Home() {
    const [posts,setposts]=useState([]);
    const user=window.localStorage.getItem("userLogin");

    //setting the posts data in state and added states of button, button color to every post data
    useEffect(async()=>{
        const fetchedData=await Api();
        var res=fetchedData.map((data)=>{
            return data={...data,btn:"UpVote",class:"btn btn-success mx-3",count:0}
        })
        setposts(res);
    },[]);

    //Changing of colour and text in Upvote button
    const btnChange=(id)=>{
        if(posts[id].btn==="UpVote"){
           const res =posts.map((post,index)=>{
                if(id===index){
                    post.btn="UnVote";
                    post.class="btn btn-danger mx-3";
                    post.count+=1;
                    return post;
                }
                else{
                    return post
                }
           })
           sort(res);
           setposts(res);
        }
        else{
            const res =posts.map((post,index)=>{
                if(id===index){
                    post.btn="UpVote";
                    post.class="btn btn-success mx-3";
                    post.count-=1;
                    return post;
                }
                else{
                    return post
                }
           })
           sort(res)
           setposts(res);
        }
    }

    //Sorting according to upvotes

    function sort(posts){
        for(var x=1;x<posts.length;x++){
            let key=posts[x].count;
            let ans=posts[x];
            let y=x-1;

            while(y>=0 && posts[y].count<key){

                posts[y+1]=posts[y];
                y-=1;
            }
            posts[y+1]=ans;
        }
    }

    //Storing postId and UserId in local storage for Api fetching purpose
    const sendPostId=(id,userId)=>{
        window.localStorage.setItem("postId",id);
        window.localStorage.setItem("userId",userId);
    }

    return (
        <div>
            <Header />
            {posts.length ? 

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
                                    <span class="badge bg-info text-light">{post.count}</span>
                                    {user==="true" ? <button className={post.class} onClick={()=>btnChange(index)}>{post.btn}</button>:<span></span>}
                                    
                                    <NavLink to="/comments" className="btn btn-primary my-3 mx-2">View Comments</NavLink>
                                </div>

                            </div>
                        
                        );
                    })}
                </div>
            :
            <div class="d-flex justify-content-center col-10 mx-5 my-5">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>}

        </div>
        
    )
}
