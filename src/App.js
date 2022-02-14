import {Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home'

const App = () => (
  <div>
    <Route path="/" component={Home} />
  </div>
)

export default App
