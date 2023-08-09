import React,{useContext,useState,useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import { Contexto } from "../UserContext.js"
import {BsGraphUp,BsWallet2,BsHourglassSplit,BsFillFileEarmarkTextFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";

export default function Movie(props) {

  const {currentMovie,setCurrentMovie} = useContext(Contexto);
  const [currentMovieURL,setCurrentMovieURL] = useState(`https://api.themoviedb.org/3/movie/${currentMovie.id}?api_key=703df27362caf288d70708d63223169c`)
  const [trailerAPI,setTrailerAPI] = useState(`https://api.themoviedb.org/3/movie/${currentMovie.id}/videos?api_key=703df27362caf288d70708d63223169c`)
  const [trailerURL,setTrailerURL] = useState("")


  useEffect(()=>{

    const getMovies = async (url,set) => {
      const res = await fetch(url)
      const data = await res.json()
      set(data)
    }

    const getTrailers = async (url,set) => {
      const res = await fetch(url)
      const data = await res.json()
      const list = await data.results
      // const print = await console.log(list)

      const trailer = await list.map(item =>{
        if((item.name.includes("Trailer") || (item.name.includes("trailer")))){
          setTrailerURL(`https://www.youtube.com/embed/${item.key}?controls=1`)
          return item
        }else{
          return 
        }
      })
    }
    getMovies(currentMovieURL,setCurrentMovie)
    getTrailers(trailerAPI,setTrailerAPI)
  },[])
  
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US",{
      style: "currency",
      currency: "USD",
    });
  };


  return (
    <div  className='movie__page__container'>
      <a target="_blank" href={currentMovie.homepage}>
        <MovieCard showButton ={false}  key={currentMovie.id} movies={currentMovie}/>
      </a>
      <div className='information__movie'>
        <h2 className='movie__page__title'>{currentMovie.original_title}</h2>
        <div className='movie__page__subtitle' >
          <AiFillStar size={25} color='yellow'/>
          <h3 className='hating'>{currentMovie.vote_average} / {currentMovie.release_date}</h3>
        </div>
        
        <div className='movie__page__informations'>
          <h4 className="movie__page__overview" >{currentMovie.overview}</h4>
          
          { currentMovie.budget > 0 && <div className="movie__page__info" >
          <BsWallet2 size={25}/>
          <h4>{formatCurrency(currentMovie.budget)}</h4>
          </div>}

          { currentMovie.revenue > 0 && <div className="movie__page__info" >
          <BsHourglassSplit size={25}/>
          <h4>{formatCurrency(currentMovie.revenue)}</h4>
          </div>}

          { currentMovie.runtime > 0 && <div className="movie__page__info" >
          <BsFillFileEarmarkTextFill size={25}/>
          <h4>{currentMovie.runtime} minutes</h4>
          </div>}

          {trailerURL && <a href={trailerURL} target="_blank" className='trailer__button'>Trailer</a>}

          </div>
      </div>

    </div>
  )
}
