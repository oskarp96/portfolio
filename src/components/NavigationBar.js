import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const NavigationBar = () => (
    <Navbar style={{backgroundColor: "#fff"}} expand="lg">
        <Navbar.Brand href="/">Oskar Persson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Link style={{ color: "#222" }} className="nav-link" to="/">Home</Link></Nav.Item>
                <Nav.Item><Link style={{color: "#222"}} className="nav-link" to="/about">About</Link></Nav.Item>
                <Nav.Item><Link style={{color: "#222"}} className="nav-link" to="/contact">Contact</Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)