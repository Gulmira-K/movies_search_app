import { useEffect, useState } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Home.scss'
import Loader from "react-loader-spinner";
import MoviesCarousel from '../carousel/MoviesCarousel'


const Home = () => {
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {setLoading(false)}, 1000)
  }, [])

  return (
    <div>
      {loading
        ? <div className='loader'>
            <Loader
                type="Oval"
                color="#da0037"
                height={80}
                width={80}
                timeout={1000}
            />
          </div>
        : <div className='content'>
            <MoviesCarousel />
          </div>
      }
    </div>
  )
}

export default Home
