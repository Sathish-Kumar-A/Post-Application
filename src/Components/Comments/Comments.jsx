import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { CommentApi } from '../../API/Api';

export default function Comments() {
    //Using react hooks to set states for changeable items
    const [comments,setcomments]=useState([]);
    const [user,setuser]=useState(false);
    const [typedComment,settypedComment]=useState("");

    //Fetches Comment data from API
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{
        setcomments(await CommentApi());
    },[])

    //Storing the values to typedComment state while typing
    const handleChange =(event)=>{
        settypedComment(event.target.value);
    }

    //when user clicks add comment comment gets posted in comments section.
    const addComment=()=>{

        let obj={};
        obj.name="Random User";
        obj.body=typedComment;
        obj.id=comments.length+1;

        let res=[];
        res.push(obj);
    
        setcomments([...comments,...res]);
        settypedComment("");

    }

    //Function to add comment when submit button was clicked
    const handleSubmit=(event)=>{
        event.preventDefault();
        addComment();
    }
    

    return (
        <div>
        {comments.length ? (
            <div>
            <h3 className="commentHeadTitle text-center">Comments</h3>
            <div className="commentsSection container">

                {comments.map((comment)=>{
                    return(
                        <div className="comment bg-light" key={comment.id}>
                            <p className="text-dark px-3 pt-3">{comment.body}</p>
                            <h6 className="commentTitle px-3 pb-3 text-dark">Posted by:<strong style={{color:"teal"}}>{comment.name}</strong></h6>
                        </div>
                    );
                })}

            <button className="btn btn-warning text-white text-center my-3" onClick={()=>setuser(true)}>Add Comment</button>
            <NavLink to="/"><button className="btn btn-secondary mx-3 my-3">Home</button></NavLink>

            {user ? (
                <div className="d-flex justify-content-center">
                <form className="text-center col-6 mx-5 my-5" onSubmit={(event)=>handleSubmit(event)}>
                    <input type="text" className="form-control" value={typedComment} onChange={(event)=>handleChange(event)}/>
                    <input type="submit" className="btn btn-success my-3" />
                </form>
                </div>
            ):null}

            </div></div>
        ):<></>}
        </div>
    )
}
