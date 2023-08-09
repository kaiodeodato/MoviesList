import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar"
import { Contexto } from "./UserContext.js"
import { Routes,Route,HashRouter,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import "./App.css"

export default function App() {

  const [currentMovie,setCurrentMovie] = useState('filme 1')
  
  const [firstMovieURL,setFirstMovieURL] = useState("https://api.themoviedb.org/3/trending/movie/day?api_key=703df27362caf288d70708d63223169c")

  useEffect(()=>{
    
    const getMovies = async (url) => {
      const res = await fetch(url)
      const data = await res.json()

      setCurrentMovie(data.results[0])
    }
    getMovies(firstMovieURL)
  },[])


  return (
    <div className='app___container'>

        <Navbar/>
        
        <Contexto.Provider value={{currentMovie,setCurrentMovie}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/movie/:id" element={<Movie/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
          
        </Contexto.Provider>
    </div>
  )
}

