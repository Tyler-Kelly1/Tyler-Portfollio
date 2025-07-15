
import './App.css'

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Blog from './pages/blog/blog.tsx'
import Projects from './pages/projects/projects.tsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </Router>
  )

}


export default App
