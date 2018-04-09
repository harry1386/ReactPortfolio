import React,{ Component } from "react";
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import "./footer.css";

const footer = () => 
    <footer class="footer text-center footer">
    <div class="container">
    <div class="row">
        <div class="col-md-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Location</h4>
        <p class="lead mb-0">1600 E Stagecoach Dr
            <br/>Olathe, KS 66062</p>
        </div>
        <div class="col-md-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Around the Web</h4>
        <ul class="list-inline mb-0">
            
            <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/harry-spencer/">
                <i class="fa fa-fw fa-linkedin"></i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://github.com/harry1386">
                <i class="fa fa-fw fa-github"></i>
            </a>
            </li>
        </ul>
        </div>
        <div class="col-md-4">
        <h4 class="text-uppercase mb-4">Want More Information?</h4>
        <p class="lead mb-0">Whether it be a resume or some banter over coffee, feel free to fill out form above and I will be in contact ASAP!</p>
        </div>
    </div>
    </div>
    </footer>

    
//     <div className="footer">
//         <Navbar inverse collapseOnSelect >
//             {/* <Navbar.Header>
//             <Navbar.Brand>
//                 <a href="#brand">React-Bootstrap</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//             </Navbar.Header>
//             <Navbar.Collapse>
//             <Nav>
//                 <NavItem eventKey={1} href="#">
//                 Link
//                 </NavItem>
//                 <NavItem eventKey={2} href="#">
//                 Link
//                 </NavItem>
//                 <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
//                 </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//                 <NavItem eventKey={1} href="#">
//                 Link Right
//                 </NavItem>
//                 <NavItem eventKey={2} href="#">
//                 Link Right
//                 </NavItem>
//             </Nav>
//             </Navbar.Collapse> */}
//     </Navbar>;
// </div>

export default footer;