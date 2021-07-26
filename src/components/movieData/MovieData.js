import { useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setGenres, addToMyList } from '../redux/slice'
import './MovieData.scss'
import api from '../api/tmdbApi'

const MovieData = () => {
  const genres = useSelector((state) => state.movies.genres),
        myList = useSelector((state) => state.movies.myList),
        location = useLocation(),
        movie = location.state,
        addBtn = useRef(),
        dispatch = useDispatch();
        
  useEffect(() => {
    api.get(`/movie/${movie.id}`)
      .then(response => dispatch(setGenres(response.data.genres)))
      .catch(error => console.log(error))
  }, [movie.id])

  const addToList = (e) => {
    e.preventDefault()
    dispatch(addToMyList(movie.title))
    addBtn.current.disabled = 'true'
    addBtn.current.innerText = 'En mi lista'
    addBtn.current.classList.add('added')
  }

  return (
    <div className='movieData'>
      <h1>{movie.title}</h1>
      {
        myList.includes(movie.title)
          ? <button className='myList added' disabled>En mi lista</button>
          : <button className='myList' onClick={addToList} ref={addBtn}>+ Mi lista</button>
      }
      <ul className='genreList'>
        {
          genres.map((genre, i) => {
           return <li className='genre' key={i}><em>{genre.name}</em></li>
          })
        }
      </ul>
      {
        movie.poster_path !== null
        ? <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        : null
      }
      <h3>Titulo original: {movie.original_title}</h3>
      <h3>Rating: {movie.vote_average}</h3>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieData
