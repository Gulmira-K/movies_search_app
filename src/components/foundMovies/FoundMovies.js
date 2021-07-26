import { Link } from 'react-router-dom'
import "./FoundMovies.scss"


const FoundMovies = ({movies}) => {

  const moviesList = movies.map(movie => {
    return (
      <div className='foundMovie' key={movie.id} >
        <Link to={{
          pathname: '/details',
          state: movie
        }}>
          {movie.poster_path !== null
            ? <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            : <div className='imgSubstitution'><h3>{movie.title}</h3></div>
          }
        </Link>
      </div>
    )
  })
 
  return (
    <div className='moviesList'>
      {moviesList}
    </div>
  )
}

export default FoundMovies
