import { Link } from 'react-router-dom'
import "./MovieCarousel.scss"
import '../movieData/MovieData'

const MovieCarousel = ({ movie }) => {

  return (
    <div className='container'>
      <Link to={{
        pathname: '/details',
        state: movie
        }}
      >
        <div className='movieWrapper'>
          <h5>{movie.title}</h5>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <span><i className="fas fa-star"></i>{movie.vote_average}</span>
        </div>
      </Link>
    </div>
  )
}

export default MovieCarousel
