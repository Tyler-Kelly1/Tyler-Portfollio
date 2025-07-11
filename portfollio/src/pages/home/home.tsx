
import "./home.scss"
import Hero from "./components/Hero"

function Home() {

  return (
    <>

    <div className="mainContainer">
      <div className="heroContainer"><Hero/></div>
      <div className="blogContainer">BLOG</div>
      <div className="projectsContainer">PROJECTS</div>
    </div>
    
    </>
  )
}

export default Home
