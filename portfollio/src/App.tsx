
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Blog from './pages/blog/blog.tsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="Tyler-Portfollio/" element={<Home/>}></Route>
        <Route path="Tyler-Portfollio/blog" element={<Blog/>}></Route>
      </Routes>
    </Router>
  )

}


export default App
