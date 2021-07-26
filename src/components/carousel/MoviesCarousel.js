import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPopularMovies, setTopMovies, setUpcomingMovies } from '../redux/slice'
import 'react-multi-carousel/lib/styles.css'
import './MoviesCarousel.scss'
import api from '../api/tmdbApi'
import Carousel from 'react-multi-carousel'
import MovieCarousel from './MovieCarousel'


const MoviesCarousel = () => {
  const popular = useSelector((state) => state.movies.popular),
        top = useSelector((state) => state.movies.top),
        upcoming = useSelector((state) => state.movies.upcoming),
        movies = [popular, top, upcoming],
        movieTypes = ['popular', 'top_rated', 'upcoming'],
        dispatch = useDispatch();
 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1090 },
      items: 5,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1090, min: 600 },
      items: 3,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const displayMoviesCarousel = (movies, movieType) => {
    switch (movieType) {
      case 'popular':
        dispatch(setPopularMovies(movies))
        break;
      case 'top_rated':
        dispatch(setTopMovies(movies))
        break;
      case 'upcoming':
        dispatch(setUpcomingMovies(movies))
        break;
      default:
        return
    }
  }

useEffect(() => {
  const getMovies = () => {
    movieTypes.map(movieType => {
      return api.get(`/movie/${movieType}`)
        .then(response => {
          displayMoviesCarousel(response.data.results, movieType)
        })
        .catch(error => console.log(error))
    })
  }
    getMovies()
}, [])

  return (
    <React.Fragment>
      {
        movies.map((type, i) => {
          return (
            <div key={i}>
              <h3>{i === 0 ? 'Más populares' : i === 1 ? 'Más valoradas' : i === 2 ? 'Próximas películas' : ''}</h3>
              <Carousel
                  key={i}
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={false} 
                  infinite={true}
                  autoPlay={false}
                  autoPlaySpeed={0}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {type.map(movie => {
                    return <MovieCarousel movie={movie} key={movie.id} />
                  })}
              </Carousel>
            </div>
          )
        }
      )
    }
    </React.Fragment>
  )
}

export default MoviesCarousel