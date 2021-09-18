import axios from 'axios';
import React,{useState} from 'react';
import Header from '../Header/Header';
import "./newPost.css";

export default function Newpost() {
    const [userId,setuserId]=useState(0);
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");

    //Setting state value of userId during typing
    const userIdChange=(event)=>{
        setuserId(event.target.value);
    }

    //Setting state value of title during typing
    const titleChange=(event)=>{
        settitle(event.target.value);
    }

    //Setting state value of body during typing
    const bodyChange=(event)=>{
        setbody(event.target.value);
    }
    
    //Posting data and setting data during submit
    const handleSubmit=(event)=>{
        event.preventDefault();
        postData();
        setuserId(0);
        settitle("");
        setbody("");
        
    }
    
    //Post Data
    const postData=async()=>{
        try{
            const {data:post} = await axios.post("https://jsonplaceholder.typicode.com/posts",{
                userId,
                title,
                body
            });
        }
        catch(err){
            console.log("error",err)
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={(event)=>handleSubmit(event)}>

                <div className="userBox mx-5 mt-5">

                    <div className="mb-3 row">
                        <label  className="col-sm-2  col-form-label">User Id</label>

                        <div className="col-sm-10 ">
                            <input type="text" className="form-control" value={userId} onChange={(event)=>userIdChange(event)}/>
                        </div>

                    </div>

                    <div className="mb-3 row">
                        <label  className="col-sm-2  col-form-label">Title</label>

                        <div className="col-sm-10 ">
                            <input type="text" className="form-control" value={title} onChange={(event)=>titleChange(event)}/>
                        </div>

                    </div>

                    <div className="mb-3 row">
                        <label  className="col-sm-2  col-form-label">Body</label>

                        <div className="col-sm-10 ">
                            <textarea className="form-control" value={body} onChange={(event)=>bodyChange(event)}/>
                        </div>
                        
                    </div>

                    <div className="text-center">
                        <input type="submit" className="btn btn-success"/> 
                    </div>

                </div>

            </form>
        </div>
    )
}
