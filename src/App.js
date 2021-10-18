import { Route, Switch } from 'react-router-dom'

import Home from './container/Home/Home'
import Header from './components/Header/Header'
import './App.scss'
function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  )
}

export default App
