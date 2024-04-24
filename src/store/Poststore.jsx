
import { createContext, useReducer } from 'react'

export const postlisting=createContext({postlist:[],
    addPost:()=>{



    },
    deletePost:()=>{}});
const Postlistingprovider=({children})=>{
    const postlistreducer=(currpostlist,action)=>{
        let newpostlist=currpostlist;
        if(action.type==="delete-post"){
             newpostlist=currpostlist.filter(post=>post.id!==action.payload.postId)
        }else if(action.type==="add-post")
        {
          newpostlist=[action.payload,...currpostlist]
        }
          return newpostlist;
    }
   const addPost= (userid,postTitle,postBody,posttagsarray ) =>{
       dispatch( {type:"add-post",
       payload:{
        id: Date.now(),
        title:postTitle,
        body:postBody,
      
        userId:userid,
        tags:posttagsarray,
       }
      
      })
   }
   const deletePost= (postId ) =>{
  
         dispatch({
           type:"delete-post",
           payload:{
            postId,
           } ,
         })

   }
  const[postlist,dispatch] =useReducer(postlistreducer,Default_post_list)

    return(

        <>
          <postlisting.Provider value={{postlist,addPost,deletePost}}>{children}</postlisting.Provider>;

        </>
    )
}
const Default_post_list=[{
     id: '1',
     title:'Going to mumbai',
     body:'hi friends i am going to mumbai for my vacation',
     reaction:5,
     userId:'user-9',
     tags:['vacation','mumbai']
},{
    id: '2',
    title:'Pass hogaya bhai',
    body:'4 saal ka sanyaas pura hua bhai',
    reaction:15,
    userId:'user-10',
    tags:['sanyaas','graduating']
}];
export default Postlistingprovider