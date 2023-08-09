import React,{useState} from 'react'
import MovieCard from './MovieCard'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"


export default function Slider(props) {


    const sliderLeft = () => {
        var slider = document.getElementById(props.id)
        slider.scrollLeft = slider.scrollLeft - 700
    }
    const sliderRight = () => {
        var slider = document.getElementById(props.id)
        slider.scrollLeft = slider.scrollLeft +700

    }
    function DoMoviesElements(){
        let ArrayElements = props.movies.map(movie => {
            if(!movie.title.includes("Porn")){
            return (             
                <MovieCard showButton ={true} key={movie.id} movies={movie} />  
            )
            }
        })
        return ArrayElements
    }
    const MoviesElements = DoMoviesElements()
  return (
    <div>
        <h1 className='title__slide'>{props.id}</h1>
        
        <div className= "slider__container">
            <h2><BsFillArrowLeftCircleFill onClick={sliderLeft} className='scroll__icon__left' color='white' size={40}/></h2>
            <h2><BsFillArrowRightCircleFill onClick={sliderRight} className='scroll__icon__right' color='white' size={40}/></h2>
            <div id={props.id} className= "movieCard__container">
                {MoviesElements}
            </div>
        </div>
        
    </div>
  )
}
