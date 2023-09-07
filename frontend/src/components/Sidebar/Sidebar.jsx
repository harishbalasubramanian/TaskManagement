import './Sidebar.scss';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

// Simple Sidebar used for showing the username and a dashboard link for the user.
const Sidebar = () => {
  const {auth} = useSelector((state) => ({...state}));
  const {currentUser} = auth;
  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
          <h5>Welcome {currentUser.username}!</h5>
        </li>
        <li className="list-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar