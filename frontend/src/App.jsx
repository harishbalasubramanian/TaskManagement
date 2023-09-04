
import './App.css'
import Header from './components/header/Header'
import SignUp from './components/registration/SignUp'
import SignIn from './components/registration/SignIn'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'


import './styles/main.scss'

function App() {

  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
