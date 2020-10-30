import React from 'react';
import "./Header.css";
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        // <div className="header">
        //     <div className="header__image">
        //         <img src="assets/heathcare.jpg" />
        //         <h3>CRYP70N1C</h3>
        //     </div>

        //     <div className="header__contact">
        //         <a href="#">Contact Us</a>
        //         <a href="#">Covid Tracker</a>
        //     </div>

            
        //     <div className="header__tabs">
        //         {/* Link router */}
        //         <div className="header__register">
        //             <VpnKeyOutlinedIcon style={{ color: '#424242' }}/>
        //             <a href="#">Register</a>
        //         </div>

        //         <div className="header__login">
        //             <PersonAddRoundedIcon style={{ color: '#424242' }}/>
        //             <a href="#">Login</a>
        //         </div>
               
        //     </div>
        // </div>
        // Bootstrap
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: '#3949ab'}} variant="dark">
            <div>
            <img className="logo" src="assets/heathcare.jpg" alt="logo" />
            </div>
            <Navbar.Brand  style={{fontSize: '23px'}}>
                <Link to="/" className="router__link">
                      CRYP70N1C
                </Link>
            
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <div className="links">
                        <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} href="#features">Contact Us</Nav.Link>
                    </div>
                    <div className="links">   
                        <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} href="#pricing">Community</Nav.Link>
                    </div>
                    <div className="links">   
                        <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} href="#pricing"><Link to="/patient" className="router__link">COVID-19</Link></Nav.Link>
                    </div>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <div className="links">
                        <PersonAddRoundedIcon className="icon" style={{ color: '#fff' }}/>
                        
                        <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }}>
                        <Link to="/loginAs" class="router__link">
                            Register
                        </Link>
                        </Nav.Link>
                    </div>
                    <div className="links">
                    <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} eventKey={2} >
                        <VpnKeyOutlinedIcon className="icon" style={{ color: '#fff' }}/>
                        <Link to="/login" className="router__link">
                            Login
                        </Link>

                    </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    </>
        )
}

export default Header;
