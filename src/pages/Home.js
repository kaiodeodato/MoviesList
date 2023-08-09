import React,{useState, useEffect,useContext} from 'react'
import MovieCard from '../components/MovieCard'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import Slider from '../components/Slider'


export default function Home() {
  
    const [topMovies,setTopMovies] = useState([])
    const [topRated,setTopRated] = useState([])
    const [historyMovies,setHistoryMovies] = useState([])
    const [horrorMovies,setHorrorMovies] = useState([])
    const [musicMovies,setMusicMovies] = useState([])
    const [actionMovies,setActionMovies] = useState([])
    const [documentaryMovies,setDocumentaryMovies] = useState([])
    const [scifyMovies,setScifyMovies] = useState([])
    
    useEffect(()=>{
        const topMoviesURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=703df27362caf288d70708d63223169c"
        const topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=703df27362caf288d70708d63223169c"
        const historyMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=703df27362caf288d70708d63223169c&with_genres=36"
        const horrorMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=703df27362caf288d70708d63223169c&with_genres=27"
        const musicMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=703df27362caf288d70708d63223169c&with_genres=10402"
        const actionMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=703df27362caf288d70708d63223169c&with_genres=28"
        const documentaryMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=703df27362caf288d70708d63223169c&with_genres=99"
        const scifyMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=703df27362caf288d70708d63223169c&with_genres=878"

        getMovies(actionMoviesURL,setActionMovies)
        getMovies(topMoviesURL,setTopMovies)
        getMovies(historyMoviesURL,setHistoryMovies)
        getMovies(horrorMoviesURL,setHorrorMovies)
        getMovies(musicMoviesURL,setMusicMovies)
        getMovies(topRatedURL,setTopRated)
        getMovies(documentaryMoviesURL,setDocumentaryMovies)
        getMovies(scifyMoviesURL,setScifyMovies)
    },[])

        const getMovies =async (url,set) => {
            const res = await fetch(url)
            const data = await res.json()
            const list = await data.results

        set(list)
    }
  return (
    <div className='home__container'>
            <Slider id="Best of the Week"  movies={topMovies}/>
            <Slider id="Top Rated" movies={topRated}/>
            <Slider id="history" movies={historyMovies}/>
            <Slider id="Horror" movies={horrorMovies}/>
            <Slider id="Music" movies={musicMovies}/>
            <Slider id="Action" movies={actionMovies}/>
            <Slider id="Documentary" movies={documentaryMovies}/>
            <Slider id="Sci-fy" movies={scifyMovies}/>
    </div>
  
  )
}


