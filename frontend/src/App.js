import './App.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Interests from './pages/Interests'
import Schedule from './pages/Schedule'
import Matching from './pages/Matching'
import Matched from './pages/Matched'
import EditInterests from './pages/EditInterests'

// Components
import Footer from './components/Footer'

function App () {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router>
          <div className='App'>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/homepage' component={Homepage}></Route>
            <Route path='/interests' component={Interests}></Route>
            <Route path='/schedule' component={Schedule}></Route>
            <Route path='/matching' component={Matching}></Route>
            <Route path='/matched' component={Matched}></Route>
            <Route path='/editinterests' component={EditInterests}></Route>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
