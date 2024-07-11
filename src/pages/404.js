import * as React from "react"
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'

const NotFoundPage = () => {
  return (
    <Container className="bg-primary">
      <Row>
        <Col>1
        </Col>

        <Col className="bg-white vh-100">2
        </Col>

        <Col>3
        </Col>
      </Row>
    </Container>
  )
}

export default NotFoundPage

export const Head = () => <title> Podsiadło Design - Not found </title>
