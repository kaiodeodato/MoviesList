import React,{useContext,useState} from 'react'
import APIdata from '../APIdata'
import { Link } from 'react-router-dom'
import { Contexto } from "../UserContext.js"


export default function MovieCard(props) {

  const {currentMovie,setCurrentMovie} = useContext(Contexto);

 

  return (
    <div className='movieBanner' >
        <img className='movieCard_image' src={`${APIdata.IMG}${props.movies.poster_path}`}/>
        {props.showButton && <Link to ={`/movie/${props.movies.id}`}>
          <button onClick={()=>setCurrentMovie(props.movies)} className='link__movieCard__button' >+</button>
        </Link>}
    </div>
  )
}

