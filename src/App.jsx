import React from "react";
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'

const App = () => {
  return (
    <div className="App">
      <Sidebar /> 
      <Feed />
      <Widgets />
    </div>
  )
}

export default App;