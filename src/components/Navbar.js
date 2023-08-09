import { Link, useNavigate } from "react-router-dom"
import React, {useState,useEffect} from 'react'
import {MdLocalMovies} from "react-icons/md"
import {BsSearch} from "react-icons/bs"

export default function Navbar() {

  const [searchWord,setSearchWord] = useState("")
  const navigate = useNavigate();

function ToNavegate(e){
  e.preventDefault()
  if(!searchWord) return

  navigate(`/search?q=${searchWord}`)
  setSearchWord("")
}

console.log(searchWord)

  return (
    <div className='navbar__container'>
      <Link className="link" to="/">
        <MdLocalMovies size={27} />
        <h2>MovieList</h2>
      </Link>

      <form onSubmit={ToNavegate} className="form">
        <input 
        onChange={(e)=>{setSearchWord(e.target.value)}} 
        type="text" 
        placeholder="Search..."  
        value={searchWord}
        />
    
        <button type="submit" ><BsSearch/></button>
        
      </form>
    </div>
  )
}


