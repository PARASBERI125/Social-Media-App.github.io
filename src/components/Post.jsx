import React, { useContext, useRef } from 'react'
import { postlisting } from '../store/Poststore';

const Post=()=> {
  const {addPost}=useContext(postlisting);
  const userIdelement=useRef();
  const postTitleelement=useRef();
  const postBodyelement=useRef();
  const postTagselement=useRef();
  const handleSubmit=(event)=>{
      event.preventDefault();//dont submit i will handle
       const userid=userIdelement.current.value;
       const postTitle=postTitleelement.current.value;
       const postBody=postBodyelement.current.value;
       const postTags=postTagselement.current.value;
       const posttagsarray=postTags.split(" ");
      
       userIdelement.current.value = "";
    postTitleelement.current.value = "";
    postBodyelement.current.value = "";
    
    postTagselement.current.value = "";

       addPost(userid,postTitle,postBody,posttagsarray);
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your user id here</label>
    <input type="text" className="form-control" id="userId"  ref={userIdelement} placeholder='Your user id'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Post title</label>
    <input type="text" className="form-control" id="title" ref={postTitleelement} placeholder='How are you feeling today.....'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body"  className="form-label">Post content</label>
    <textarea type="text" rows="4" className="form-control" id="body" ref={postBodyelement} placeholder='Tell us more about it'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags"  className="form-label">Enter your Hashtags here</label>
    <input type="text"  className="form-control" id="tags" ref={postTagselement} placeholder='Enter tags using space'/>
    
  </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </div>
  )
}

export default Post
