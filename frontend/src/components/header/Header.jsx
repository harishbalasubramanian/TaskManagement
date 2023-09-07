import './header.scss'
import '../../styles/components/_button.scss'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';
const Header = () => {
  const {auth} = useSelector((state) => ({...state}));
  const dispatch = useDispatch();
  // Get our authentication state and then here we handle what happens upon a state change for our buttons
  const handleClick = e => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth');
    history.push('/signin');
    window.location.reload();
  };
  // Returns the UI header portion which displays the name and signin and signout and signup buttons
  return (
    <div>
        <nav className="header">
            <div className='header__logo'>
                <h5>Task Manager</h5>
            </div>
            <div className='header__buttons'>
              {auth.currentUser && auth.currentUser.token ? (
                <Link to='/signin' className = 'button' onClick={handleClick}>
                Sign Out
                </Link>
              ) : (
                <>
                <Link to='/signin' className = 'button'>
                  Sign In
                </Link>
                <Link to='/signup' className = 'button'>
                  Sign Up
                 </Link>
                 </>
              )}
                
                
            </div>
        </nav>
    </div>
  )
}

export default Header