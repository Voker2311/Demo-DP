import React from 'react';
import "./Header.css";
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    
        )
}

export default Header
