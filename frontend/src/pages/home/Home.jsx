import './home.scss';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
// The Home Page. Just displays an image with a button to start
const Home = () => {
  const {auth} = useSelector((state) => ({...state}));
  const {currentUser} = auth;
  return (
    <div className='home'>
      <div className="home__container">
        <h2>Organize all</h2>
        <p>With Task Manager</p>
        {currentUser && currentUser.token ? (
          <Link to='/dashboard' className = 'button'>
            Start Here
            </Link>
        ): (
          <Link to='/signin' className = 'button'>
            Start Here
          </Link>
        )}
      </div>

    </div>
  )
}

export default Home