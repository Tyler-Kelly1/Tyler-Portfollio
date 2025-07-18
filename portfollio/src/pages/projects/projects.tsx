
import "./projects.scss"
import ProjectTile from "./components/projectTile"

function Projects() {

  return (
    <>
    <div className="projectsMainCont">Hello world I am a title section.</div>
        <div className="projectsContainer">
            <ProjectTile name= "Super Cool Project 1" projectURL="https://github.com/Tyler-Kelly1"/>
            <ProjectTile name= "My Awesome Project 2"/>
            <ProjectTile name= "THE BEST PROJECT OF ALL TIME (NUMBER 3)"/>
        </div>

    </>
  )
}

export default Projects
