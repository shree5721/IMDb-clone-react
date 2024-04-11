import React,{useEffect,useState} from 'react'
import './Movielist.css'
import { useParams } from "react-router-dom"
import Cards from '../card/Card'

const Movielist = () => {
  
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=7b37b555a5d962e54f6bbdb4d2f972be&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    return (
        <>
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    </>
    )
}

export default Movielist