import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const NavigationBar = () => (
    <Navbar style={{backgroundColor: "#fff"}} expand="lg">
        <Navbar.Brand href="/">My portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link style={{ color: "#222" }} className="nav-link" href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link style={{color: "#222"}} className="nav-link" href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link style={{color: "#222"}} className="nav-link" href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)