import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFoundMovies } from './redux/slice'
import './App.scss'
import api from './api/tmdbApi'
import Header from './header/Header'
import Home from './home/Home'
import MovieData from './movieData/MovieData'
import FoundMovies from './foundMovies/FoundMovies'

function App() {
  const [text, setText] = useState(''),
        foundMovies = useSelector((state) => state.movies.foundMovies),
        dispatch = useDispatch();

  const displayMovies = (movies) => {
    dispatch(setFoundMovies(movies))
  }

  useEffect(() => {
    if (text !== '') {
      api.get(`/search/movie/`, {
      params: {
        query: text,
      }
    })
     .then(response => displayMovies(response.data.results))
     .catch(error => console.log(error))
    }

    return () => {
      setText('')
    }
  }, [text])

  return (
    <div className="App ">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header setText={setText} />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/search'}>
            <FoundMovies  movies={foundMovies} />
          </Route>
          <Route  path={'/details'} component={MovieData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
