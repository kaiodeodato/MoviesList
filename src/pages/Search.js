import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'


export default function Search() {

  const [searchParams] = useSearchParams();
  const [searchededMovies,setSearchededMovies] = useState([]);
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSearchededMovies(data.results)
  };
  
  useEffect(()=>{
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=703df27362caf288d70708d63223169c&query=${query}`

    getSearchedMovies(searchURL)

  },[query]);


  function DoMoviesElements(){
    let ArrayElements = searchededMovies.map(movie => {
        if(!movie.title.includes("Porn") && movie.poster_path){
        return (             
            <MovieCard showButton ={true} key={movie.id} movies={movie} />
        )
        }
    })
    return ArrayElements
}
const MoviesElements = DoMoviesElements()






  return (
    <div className='search__page' >
      <h2>Search for {query}</h2>
    <div className='search__page__container'>
      {MoviesElements}
    </div>
    </div>
  )
}






