import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Link, animateScroll as scroll } from "react-scroll";

class NavigationBar extends Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: "#fff" }} expand="lg" className="sticky-top">
                <Navbar.Brand><Link style={{ color: "#222" }} to="/">Oskar Persson</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Link style={{ color: "#222" }} activeClass="active" className="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Nav.Item>
                        <Nav.Item><Link style={{ color: "#222" }} activeClass="active" className="nav-link" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></Nav.Item>
                        <Nav.Item><Link style={{ color: "#222" }} activeClass="active" className="nav-link" to="connect" spy={true} smooth={true} offset={-70} duration={500}>Connect</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }
}


export default NavigationBar;