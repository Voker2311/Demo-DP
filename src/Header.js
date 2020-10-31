import React from 'react';
import "./Header.css";
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { Nav, Navbar } from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
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
                        <Link to="/doctor">
                        <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} href="#pricing">Community</Nav.Link>
                  
                        </Link>   
                    </div>
                    <Link to="/patient" className="router__link">
                        <div className="links">   
                            <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} href="#pricing">COVID-19</Nav.Link>
                        </div>
                    </Link>
            
                </Nav>
                <Nav>
                    {/* <div className="links">
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
                    </div> */}
                    <div className="links" style={{paddingRight: '5px'}}>
                    <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} eventKey={2} >
                        <div style={{display: 'flex', maxWidth: '100px'}}>
                        <Avatar style={{}} />
                        <Link style={{textAlign: 'center', marginLeft: '10px'}} to="/login" className="router__link">
                            khushal Thepane
                        </Link>
                        </div>
                        

                    </Nav.Link>
                    </div>
                    <div className="links">
                    <Nav.Link className="link__name" style={{ color: 'white', fontSize: '16px' }} eventKey={2} >
                        <ExitToAppIcon className="icon" style={{ color: '#fff' }}/>
                        <Link to="/login" className="router__link">
                            Logout
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
