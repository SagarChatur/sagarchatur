import React from 'react'
import { Container } from 'react-bootstrap'
import "./CSS/Experience.css"
import Footer from "../Components/Footer"

export default function Experience() {
  return (
    <div>
    <section className='ExpSection'>
      <Container>
      <h2 className='h2Title'>Experience</h2>
      <p className='Ptext'>As for my future, I hope to one day work as a Full-stack developer and work with a diverse development team.</p>
      <div className="timeline">
      <div className="containe left">
        <div className="content">
          <h6>Apr 2022 - Oct 2022 (6 Months)</h6>
          <h5>Front End Developer</h5>
          <h6 className='company'>ViniPay Fintech Pvt Ltd </h6>
          <p>As a Frontend Developer, I was responsible for creating the visual design of a website. Designing and developing web pages, with a focus on usability, aesthetics, and creativity using the popular javascript framework ReactJS.</p>
        </div>
      </div>
      <div className="containe right">
        <div className="content">
          <h6>Dec 2020 - Dec 2021 (1 Year 1 Month)</h6>
          <h5>Web Designer </h5>
          <h6 className='company'>Corehitech Solutions Pvt Ltd</h6>
          <p>Responsible for designing and developing websites, with a focus on usability and aesthetics. This includes creating page designs, and prototypes to communicate design ideas and concepts.</p>
        </div>
      </div>
      <div className="containe left">
        <div className="content">
          <h6>Feb 2021 - Jun 2022 (1 Year 5 Months)</h6>
          <h5>Website Administrator - (Freelance)</h5>
          <h6 className='company'>R Personify Pvt Ltd </h6>
          <p>As a Website Administrator, I was responsible for all aspects of web design, and website maintenance including information architecture, branding, and website implementation. This includes working closely with the Marketing team to ensure that the company’s brands and messages are consistent across all channels.</p>
        </div>
      </div>
      <div className="containe right">
        <div className="content">
          <h6>Aug 2020 - Sep 2020 (2 Months)</h6>
          <h5>Web Developer Intern</h5>
          <h6 className='company'>Codeproofs Private Limited</h6>
          <p>Worked as a web designer in a digital agency that designed and maintained websites for various businesses. Responsibilities included designing, maintaining, creating, and updating websites and mobile applications to ensure they are up to date with current trends and industry standards.</p>
        </div>
      </div>
      <div className="containe left">
        <div className="content">
          <h6>Jun 2020 - Jul 2020 (2 Months)</h6>
          <h5>Web Designer Intern</h5>
          <h6 className='company'>Knooviq Technologies Pvt Ltd</h6>
          <p>As a Web Designer, I was responsible for designing, maintaining, and updating various types of design assets on the websites. Designing templates and web pages for multiple types of websites, including blogs, using HTML and CSS. – Developed responsive layouts for mobile devices working with a CMS of current website content.</p>
        </div>
      </div>
      <div className="containe right">
        <div className="content">
          <h6>Apr 2021 - May 2022 (2 Months)</h6>
          <h5>Web Designer Intern</h5>
          <h6 className='company'>Product Search Infotech Pvt Ltd  </h6>
          <p>Worked as a web designer in a marketing agency that designed and maintained websites for various businesses. Responsibilities included designing, maintaining, creating, and updating websites and mobile applications to ensure they are up to date with current trends and industry standards.</p>
        </div>
      </div>
      </div>
      </Container>
    </section>

    <Footer />
    
    </div>
  )
}
