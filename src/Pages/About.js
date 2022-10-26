import React from "react";
import "./CSS/About.css"
import { Container, Row, Col } from "react-bootstrap";
import SkillSet from "../Images/Skill set.png"
import Education from "../Images/virtual graduation.png"
import UoM from "../Images/Education/UOM.png"
import KmA from "../Images/Education/kmagrawal.jpg"
import Footer from "../Components/Footer"




const About = () => {
    return <div>

      {/* Hero Section */}
      <section className="HeroSection">
        <Container>
          <Row>
            <Col sm={6} className="AboutImageSection">
              <img src={SkillSet} alt="About Skills"/>
            </Col>
            <Col sm={6} className="AboutContent">
              <h4>About Me</h4>
              <h2>Web Front-End Developer</h2>
              <p>Self-motivated Web Developer with experience working on projects. Passionate and hardworking with a penchant for meeting deadlines. Interested in a role with a company promoting best practices and offering diverse customer projects.</p>
              <p>Front End Developer and Web Designer with proven experience at ViniPay Fintech Pvt Ltd and Corehitech Solutions Pvt Ltd in helping companies create and maintain a better code base for reusability.</p>
              <p>Capable of continuous learning from senior developers. Passionate and hardworking with a penchant for meeting deadlines.</p>
              
              <h5><span>Let's talk with me:</span> <br /> <a href="mailto:sagarchatur4444@gmail.com" target="_blank" rel="noreferrer">sagarchatur4444@gmail.com</a></h5>
            </Col>
          </Row>
        </Container>
      </section>





      {/* Education section */}
      <section className="Education">
      <Container>
      <Row>
        <Col sm={6} className="EduContent">
          <h4>Educational Background</h4>

          { /*Card 1 */}
          <div className="card">
            <div className="card-footer">
                <small className="text-muted">2021 -2023</small>
            </div>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img src={UoM} alt="Card cap" className="EDLogo"/>
                </div>
                <div className="card-body">
                    <h5 className="">Master of Science (Computer Science)</h5>
                    <h6>University Of Mumbai</h6>
                    <p className="">pursuing ...</p>
                </div>
            </div>
          </div>

          { /*Card 2 */}
          <div className="card mt-3">
            <div className="card-footer">
                <small className="text-muted">2018 -2021</small>
            </div>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img src={KmA} alt="Car cap" className="EDLogo"/>
                </div>
                <div className="card-body">
                    <h5 className="">Bachelor of Science (Information Technology)</h5>
                    <h6>K. M. Agrawal College, Kalyan (W)</h6>
                    <p className="">Score: 8.80 out of 10 CGPA</p>
                </div>
            </div>
          </div>

        </Col>

        <Col sm={6}><img src={Education} alt="Education" className="EducationVector"/></Col>



      </Row>
    </Container>
      </section>

      <Footer />

    </div>
  };
  
  export default About;