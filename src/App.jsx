import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
import Explore from './components/Explore/Explore'
import Notifications from './components/Notifications/Notifications'

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/home" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
      </Routes>
      </BrowserRouter>
      <Widgets />
    </div>
  )
}

export default App;