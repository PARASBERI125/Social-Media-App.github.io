import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { postlisting } from '../store/Poststore';
function P({post}) {
  const {deletePost}=useContext(postlisting);
  return (
    <div>
      <div className="card post-card" >
      <div className='card-body'>
    <h5 className="card-title ">{post.title}
   <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{
     deletePost(post.id)
   }}>
    <MdDelete size={18} /> 
    </span>
    

    </h5>
    <p className="card-text">{post.body}</p>
   
    {post.tags.map((items)=>(<span key={items} className="badge text-bg-primary hashtag">{items}</span>))}
    
    <div className="alert alert-success likes" role="alert">
   liked by {post.reaction} people
</div> 
   
    </div>
  
 
  </div>
</div>
    
  )
}

export default P
