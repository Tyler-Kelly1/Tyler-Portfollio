
import './projectTile.scss'


interface tileInfo{
    name: string 
    imgURL?: string
    projectURL?: string
}

function ProjectTile(props: tileInfo) {

    function redirect(url?:string){

        if(url){
            window.open(url)
            return 0
        }
        
        window.open("https://github.com/Tyler-Kelly1")
        return 0

    }


    return (<>
         <div className="tile" onClick={() => redirect(props.projectURL)}>

            <div className='tileText'>{props.name}</div>
         </div>
    </>)
}

export default ProjectTile