import {Link} from "react-router-dom"
function Nav () {

    return (
        <div className="nav">
        <Link to = "/">
        <h1 className="nav--home">Home</h1>
        </Link>
        <Link to ="/myProjects">
        <h1 className="nav--home">My work</h1>
        </Link>
        <Link to ="/Contact">
        <h1 className="nav--home">Contact</h1>
        </Link>
        </div>
    )
}
export default Nav