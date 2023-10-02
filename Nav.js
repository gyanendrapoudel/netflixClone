import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  const [show, setShow]= useState(false);
  const navigate = useNavigate();
  const handleShow = ()=>{
    if(window.scrollY>100){
      setShow(true);
    }
    else{
      setShow(false)
    }

  }
  useEffect (()=>{
    window.addEventListener("scroll",handleShow);
    return()=>window.removeEventListener('scroll', handleShow)
  },[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          onClick={()=>{navigate('/')}}
          className="nav_logo"
          src="https://pngimg.com/d/netflix_PNG26.png"
          alt=""
        />
        <img
           onClick={()=>{navigate('/profile')}}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  )
}
export default Nav