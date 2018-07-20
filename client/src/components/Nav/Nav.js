// import React from "react";
// import { Link } from "react-router-dom";


// const Nav = () => (
//   <ul className="">
    
//     <li className="">
//       <Link to="/">
//         Home
//       </Link>
//     </li>
//     <li className="">
//       <Link to="/results">
//         Results
//       </Link>
//     </li>
//     <li className="">
//       <Link to="/saved">
//         Saved
//       </Link>
//     </li>

//   </ul>
// );


import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
                <Navbar className="default-color pl-5 pr-5" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>mern</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/saved">Saved</NavLink>
                          </NavItem>
                        
                        </NavbarNav>

                    </Collapse>
                </Navbar>
        );
    }
}

export default Nav;
