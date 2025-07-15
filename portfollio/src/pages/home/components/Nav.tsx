import "./Nav.scss"
import { useNavigate } from 'react-router-dom';

function Nav(){

    const navigate = useNavigate()


return (<>


<div className="navCont">

    <div className= "navOption" onClick={() => navigate('/blog')}>Blog</div>
    <div className= "navOption" onClick={() => navigate('/projects')}>Projects</div>

</div>

</>)

}

export default Nav