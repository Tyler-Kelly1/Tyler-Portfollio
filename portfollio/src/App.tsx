
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Blog from './pages/blog/blog.tsx'


function App() {

  return (
    <Router basename='Tyler-Portfollio'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
    </Router>
  )

}


export default App
