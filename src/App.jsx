import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'

const App = () => {
  return (
    <div className="App">
      <Sidebar /> 
      <Feed />
    </div>
  )
}

export default App;