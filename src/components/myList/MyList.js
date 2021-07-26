import './MyList.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromMyList } from '../redux/slice'

const MyList = ({setShowList}) => {
  const myList = useSelector((state) => state.movies.myList),
        dispatch = useDispatch();

  const removeFromList = (movie) => {
    dispatch(removeFromMyList(movie))
  }
 
  return (
    <div className='myListModal'>
      <ul>
        <li><i className="fas fa-times close" onClick={() => setShowList(false)}></i></li>
        {myList.length
          ? myList?.map((movieTitle, i) => {
              return (
                <li key={i}>
                  <span>{movieTitle}</span>
                  <i className="fas fa-trash-alt trash" onClick={() => removeFromList(movieTitle)}></i>
                </li>
              )
            })
          : <li><p className='emptyList'>La lista está vacía...</p></li>
      }
      </ul>
    </div>
  )
}
export default MyList
