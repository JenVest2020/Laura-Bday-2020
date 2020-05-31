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
            <Navbar color="muted" dark >
                <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" >=MENU=</NavbarToggler>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">ABOUT LAURA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">NATURE PHOTOS</NavLink>
                            <NavLink href="/components/">HAND WORK & DOODLES</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Navigation;