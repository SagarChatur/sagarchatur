import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Linkedin from "../Images/Social Media/linkedin.png"
import github from "../Images/Social Media/github.png"
import Facebook from "../Images/Social Media/facebook.png"
import instagram from "../Images/Social Media/instagram.png"
import whatsapp from "../Images/Social Media/whatsapp.png"
import logo from"../Images/Sagar Chatur Logo.png";






export default function Footer() {
  return (
    <div>
        {/* Footer */}
        <section className="Footer">
        <footer>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="iconcont">
                  <div className="SocialIco">
                    <a href="https://www.linkedin.com/in/sagar-chatur/" target="_blank" rel="noreferrer">
                      <img src={Linkedin} alt="Linkedin" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://github.com/sagarchatur" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://www.facebook.com/sagar.chatur.33/" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="Facebook" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://www.instagram.com/sagarchatur.dev" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://api.whatsapp.com/send?phone=+917304848618&text=Hello." target="_blank" rel="noreferrer">
                    <img src={whatsapp} alt="whatsapp" />
                    </a>
                  </div>
                </div>
              </Col>

              <Col sm={4} className="text-center">
              <Link to="/"><img src={logo} className="FooterLogo" alt="Logo" /></Link>
              </Col>

              <Col sm={4} className="FooterLinks copytxt">
              <p>2021-2022 - Sagar Chatur</p>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </section>
    </div>
  )
}
