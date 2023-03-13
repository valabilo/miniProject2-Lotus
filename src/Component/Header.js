import logo from '../assets/logo-1.jpg';
import {Link} from 'react-router-dom';
import { ReactDOM } from 'react';


const Header = () => {
    return (
        <div className="navbar sticky-top m-0 navbar-expand-lg navbar-dark">
            <div class="container-xxl">
                <Link to="/" className="navbar-brand me-5">
                    <img className="wish-zoom" width="140px" height="60px" src={logo} alt=""/>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-custom navbar-nav">
                        <Link to="/products" className="ms-auto nav-item nav-link active">PRODUCTS</Link>
                        <Link to="/promotions" className="ms-auto nav-item nav-link">PROMOTIONS</Link>
                        <Link to="/services" className="ms-auto nav-item nav-link">SERVICES</Link>
                    </div>
                    <div className="d-flex ms-auto">
                        <input type="text" className="form-control me-sm-2" placeholder="Search"/>
                        <button type="submit" className="btn btn-outline-light">Search</button>
                    </div>
                    <div className="navbar-nav m-2">
                        <Link to="/" data-bs-toggle="modal" className="wish-zoom ms-auto nav-item nav-link">
                            <img width="30px" height="30px" src="https://cdn3.iconfinder.com/data/icons/jolly-icons-free/64/cart_64.png" alt=""/>
                            <span className="badge bg-danger">4</span>
                            </Link>
                        <Link className="ms-auto wish-zoom nav-item nav-link" data-bs-toggle="modal">
                            <img width="30px" height="30px" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-64.png" alt="Log in"/>
                            </Link>
                    </div>
                </div>
                </div>
            </div>
        
       );
    }
export default Header;