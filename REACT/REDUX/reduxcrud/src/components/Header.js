import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
   
    render() { 
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                <h1>
                    <Link to={'/'} className="text-light">App Crud - React - Redux - Rest Api - Axios - Router</Link>
                </h1>
                <Link to={'/productos/nuevo'} className="text-light"><button type="button" className="btn btn-danger nuevo-post">New Product</button></Link>
            
            </nav>
        
          );
    }
}
 
export default Header;
