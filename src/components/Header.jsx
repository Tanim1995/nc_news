import { Link } from "react-router-dom"
const Header = ()=>{
    return (
        <header className= "header-bar">
        <nav className="nav-bar">
             <Link to= "/articles" className="header">Articles</Link>
             
        </nav>

       
        
    </header>
    )
}
export default Header