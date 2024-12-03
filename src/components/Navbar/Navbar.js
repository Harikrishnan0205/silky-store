import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">SS</a>
                    <form className="d-flex mx-auto" style={styles.searchbar} role="search">
                        <input className="form-control me-auto" type="search" placeholder="Search" aria-label="Search" />
                    </form>

                    <div className="">
                        <ul className="navbar-nav d-flex flex-row  me-2 mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <a class="nav-link px-3" href="#">Kurti</a>
                            </li>
                            <li className='nav-item'>
                                <a class="nav-link px-3" href="#">Gown</a>
                            </li>
                            <li className='nav-item'>
                                <a class="nav-link px-3" href="#">Saree</a>
                            </li>
                        </ul>
                    </div>



                    <div className='d-flex align-items-center ms-3'>
                        <div className='nav-item me-3'>
                            <i className="bi bi-person-circle fs-5"></i> Login
                        </div>
                        <div className='nav-item'>
                            <i className="bi bi-bag fs-5"></i> Cart
                        </div>
                    </div>

                </div>

            </nav>
        </div>
    )
}
export default Navbar

const styles = {
    searchbar: {
        width: "50%"
    }
}