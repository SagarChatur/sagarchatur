import React from 'react'
import { Container } from 'react-bootstrap'
import "./Header.css"

export default function Header(props) {
  return (
    <div className='HeaderSection text-center'>
        <Container>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        </Container>        
    </div>
  )
}
