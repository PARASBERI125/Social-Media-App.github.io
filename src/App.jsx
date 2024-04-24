import Header from './components/Header'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Sidebar from './components/Sidebar'
import Post from './components/Post'
import Postlistingprovider from './store/Poststore'
import Postlist from './components/Postlist'
import {  useState } from 'react'
function App() {
  const[selectedtab,setselectedtab]=useState("");
  return (
    <Postlistingprovider>
    
    <div className='app-container'>
    <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
    <div className='content'>
    <Header></Header>
    {selectedtab==="Home" ? (<Postlist></Postlist>) : (<Post></Post>)}
    
    <Footer></Footer>
    </div>
    
    </div>
    
    </Postlistingprovider>
    
    
  )
}

export default App
