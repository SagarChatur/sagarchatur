import React from 'react'
import "./NavBar.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact'
import Experience from '../Pages/Experience'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
import logo from"../Images/Sagar Chatur Logo.png";
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
   

  return (
    <BrowserRouter>
    <Navbar bg="light" expand="lg" fixed='top'> 
      <Container className='p-2'>
        <Navbar.Brand><Link to="/"><img src={logo} className="BrandLogo" alt="Logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className='me-auto'></Nav>
          <Nav className="Nav-List">
            <Nav.Link><NavLink activeClassName="active" to="/About">About Me</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName="active" to="/Skills">Skills</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName="active"to="/Experience">Experience</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName="active"to="/Projects">Projects</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName="active" to="/Contact">Contact</NavLink></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Experience" component={Experience}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/Skills" component={Skills}/>
          
        </Switch>
      </BrowserRouter>
  )
}
