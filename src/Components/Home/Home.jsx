import React from 'react'
import { useState,useEffect } from 'react'
import { Api } from '../../API/Api';
import "./home.css"

export default function Home() {
    const [posts,setposts]=useState([]);
    const [voteBtn,setvoteBtn]=useState("UpVote");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{
        setposts(await Api());
    },[]);

    console.log(posts);

    const btnChange=()=>{
        if(voteBtn==="UpVote"){
            setvoteBtn("UnVote");
        }
        else{
            setvoteBtn("UpVote");
        }
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
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <button className="btn btn-success mx-3" onClick={()=>btnChange()}>{voteBtn}</button>
                                <a href="#" className="btn btn-primary">View Comments</a>
                            </div>
                        </div>
                    
                    );
                })}
            </div>
        :<></>
    )
}
