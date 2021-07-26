import React, {useRef, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Header.scss'
import MyList from '../myList/MyList'

const Header = ({ setText }) => {
  const [showList, setShowList] = useState(false),
        history = useHistory(),
        inputValue = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value)
    history.push('/search')
  }

  return (
    <React.Fragment>
      <div className='header-container'>
        <Link to={process.env.PUBLIC_URL + '/'} onClick={() => inputValue.current.value = ''}>
          <div className='logo'>
            <i className="fas fa-film"></i>
            <span>MOVIES</span>
          </div>
        </Link>
        <div className='input-container'>
          <input type='text' placeholder='Buscar pelicula...' className='input' onChange={handleChange} ref={inputValue} />
          <i className="fas fa-search search-icon" ></i>
        </div>
        <button className='myList' onClick={()=> setShowList(!showList)}>Mi lista</button>
      </div>
      {showList ? <MyList setShowList={setShowList} /> : null}
    </React.Fragment>
  )
}

export default Header
