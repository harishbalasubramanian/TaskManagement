
import './App.css'
import Header from './components/header/Header'
import SignUp from './components/registration/SignUp'
import SignIn from './components/registration/SignIn'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import TaskManager from './pages/taskmanagement/TaskManager'
import Dashboard from './pages/dashboard/Dashboard';
import './styles/main.scss'
// Acts as the main hub for the whole webapp bu including every major route along with the header
function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/taskmanager' element={<TaskManager/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
