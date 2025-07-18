
import "./home.scss"
import Hero from "./components/Hero"
import ProjectsSection from "./components/projectSection"

function Home() {

  return (
    <>

    <div className="mainContainer">
      <div className="heroContainer"><Hero/></div>
      <div className="projectsContainer"><ProjectsSection/></div>
      <div className="blogContainer">BLOG</div>
    </div>
    
    </>
  )
}

export default Home
