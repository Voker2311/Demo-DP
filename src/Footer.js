import React from 'react'
import './Footer.css'

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Form, FormControl, Button } from 'react-bootstrap';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__head">
            <div className="footer__address">
                    <h5><span><LocationOnIcon /></span> Our Address:</h5>
                    <p>
                        Department of Posts,
                        Business Development Directorate,
                        Parliament Street,
                        NEW DELHI 110001,
                        INDIA
                    </p>
                </div>
                <div className="footer__links">
                    {/* <h5>Contact Us</h5> */}
                    <ul>
                        <li>
                            <span className="icon"><PhoneIcon /></span>
                            +91-9594522212
                        </li>
                        <li>
                            <span className="icon"><MailIcon /></span>
                            user@gmail.com
                        </li>
 
                    </ul>
                    <ul>
                    <li>
                            <span className="icon"><FacebookIcon /></span>
                            akshay_shinde21 
                        </li>
                        <li>
                            <span className="icon"><TwitterIcon /></span>
                            @_khussshal_
                        </li>
                    </ul>
                </div>
   
                <div className="input">
                    <h5>Stay Healthy, Stay Safe ❤ </h5>
                    <small className="small">Get Quarterly updates directly to your inbox</small>
                    <Form inline>
                        <FormControl type="text" placeholder="Email Address" className="mr-sm-2 inputs" />
                        <Button className="but" variant="dark">Sign Up</Button>
                    </Form>
                </div>

            </div>

            <div className="footer__copyright">
                <small>Copyright ©  2020 Cryptonics Inc. All Rights Reserved. <a href="#id">User Agreement, Privacy, Cookies and AdChoice ℹ </a></small>
            </div>
 
        </div>
    )
}

export default Footer
