import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from "styled-components";

// const menuheader = styled.h2`
//     text-align:right;
//     font-size: 3rem;
//     font-weight:bolder;
// `;



function Navigation() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <h6 className="text-white float-right">MENU</h6>
            <Navbar color="muted" dark >
                <NavbarBrand href="/" className="mr-auto float-right"></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">ABOUT ME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">NATURE PHOTOS</NavLink>
                            <NavLink href="/components/">HAND WORK/ DOODLES</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Navigation;