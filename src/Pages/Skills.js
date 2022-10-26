import React from 'react'
import AboutIntro from "../Images/119356-development.gif"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Skills.css"
import WebDesign from "../Images/Skills/web-design.png"
import FrontEnd from "../Images/Skills/improvement.png"
import UiUx from "../Images/Skills/ui.png"
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';




export default function Skills() {

  function OpenCV(){
    window.open(
      "https://drive.google.com/file/d/1HLA39b9tPsW72-HBDIRdPwHntWz-eXmm/view?usp=sharing", "_blank");
    }

  return (
    <div>

    {/*Skills  */}
    <section className="SkillsSection">
    <Container>
      <Row className="text-center">
        <h2>My Skills</h2>
        <p>Interested in a role with a company promoting best practices and offering diverse <Link to="/Projects" style={{textDecoration:"none", color:"#084AF3"}}>customer projects.</Link></p>

        <Col sm="4" className="SkillBox">
          <img src={WebDesign} alt="Web Design"/>
          <h4>Web Design And Development</h4>
          <p>Your imagination just got a fresh look. Build modern, Fast Loading, easy-to-use websites. I offer the best web design service at a low cost.</p>
        </Col>

        <Col sm="4" className="SkillBox">
          <img src={FrontEnd} alt="Front End"/>
          <h4>Front End Development</h4>
          <p>Passionate about providing excellent services in the field of front end development, including HTML, CSS, Javascript, Bootstrap and React JS. </p>
        </Col>

        <Col sm="4" className="SkillBox">
          <img src={UiUx} alt="Ui UX"/>
          <h4>UI / UX Design</h4>
          <p>Provides creative UI UX design services to help companies creatively communicate their vision with interface and user experience. </p>
        </Col>

      </Row>
    </Container>
    </section>


      {/* Skills bars Section */}
      <section className="Skillssection">
      <Container>
                <Row>
                  <Col sm={6} className="Skillbars">
                    <h4>My Skill Set</h4>
                    <ProgressBar now={80} label="HTML" />
                    <ProgressBar now={70} label="CSS" />
                    <ProgressBar now={90} label="Bootstrap" />
                    <ProgressBar now={75} label="React JS" />
                    <ProgressBar now={80} label="WordPress Development" />
                    <ProgressBar now={65} label="UI / UX Design" />
                    <ProgressBar now={50} label="SEO Basics & Optimizations" />
                    <ProgressBar now={30} label="Backend ( Learning...)" animated />
                    <button className="primary"
                    onClick={OpenCV}>
                    Download CV
                  </button>
                  </Col>
                  <Col sm={6} className="SkillIntro">
                    <img src={AboutIntro} alt="About Skills" className="EDLogo"/>
                  </Col>
                </Row>
              </Container>
      
              
      </section>


      <Footer />
    </div>
  )
}
