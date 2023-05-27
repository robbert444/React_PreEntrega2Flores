import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from "react-router-dom"
//menu
const NavBar = () => {
    const logo = "../src/assets/logo_eg.png"
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-3">
        <div className="container-fluid">
            <Link to={"/"}>
            <img className='imgLogo' src={logo} alt="Logo Empire Game" />
            </Link>
            <span className="navbar-brand" href="#">Empire Game</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to={"/"} className='sinlinea'>
                    <span className='sinlinea nav-link mt-2'><i class="bi bi-house text-dark fs-5"></i> Inicio</span>
                 </Link>
                </li>
                <li className="nav-item btn ">
                <NavLink to={"/categoria/4"} className='sinlinea nav-link'> <i class="bi bi-dpad text-dark fs-5"></i> De Estrategia </NavLink>
                </li>
                <li className="nav-item btn">
                <NavLink to={"/categoria/2"} className='sinlinea nav-link'> <i class="bi bi-dpad text-dark fs-5"></i> De Aventura </NavLink>
                </li>
                <li className="nav-item btn">
                 <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='sinlinea nav-link'><i class="bi bi-handbag"></i> Preventa</a>
                </li>
            </ul>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Preventa</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Por el momento no tenemos preventa de juegos
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
            </div>
            <CartWidget/>
        </div>
    </nav>

  
  )
}

export default NavBar
