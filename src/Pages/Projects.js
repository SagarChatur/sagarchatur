import React from 'react'
import Project1 from "../Images/Projects/Rpersonify.png"
import Project2 from "../Images/Projects/Dynamics Agiluty.png"
import Project3 from "../Images/Projects/counselorjyoti.png"
import Project4 from "../Images/Projects/Car Galaxy.png"
import Project5 from "../Images/Projects/Evo Design.png"
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Projects.css"
import Footer from '../Components/Footer';


export default function Projects() {
  return (
    <div>
      {/* Portfolio Section */}
      <section className="PortfolioSection">
      <Container>
          <h2>Recent Projects</h2>
          <p>I design and code beautifully simple things, and I love what I do.</p>
        <Row className="ProjectsList">
        <Col sm="6" className="Project">                
          <img src={Project1} alt="rpersonify" /> 
        </Col>
        <Col sm="6" className="Project">                
          <img src={Project2} alt="Dynamics Agilty" /> 
        </Col>        
        </Row>
        <Row className='pt-4'>
        <Col sm="4" className="Project">        
        <img src={Project3} alt="counselor jyoti" /> 
      </Col>
      <Col sm="4" className="Project">                
        <img src={Project4} alt="Car Galaxy" /> 
      </Col>
      <Col sm="4" className="Project">                
        <img src={Project5} alt="Evo Design Studio" />  
      </Col>
        </Row>
      </Container>
    </section>

    <Footer />
    </div>
  )
}
