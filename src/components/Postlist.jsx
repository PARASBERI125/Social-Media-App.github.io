import React, { useContext } from 'react'
import P from './P'
import { postlisting } from '../store/Poststore'
function Postlist() {
  const {postlist}=useContext(postlisting)
  return (
    <div>
    {postlist.map((items)=>(<P key={items.id} post={items}></P>))}
      
    </div>
  )
}

export default Postlist
