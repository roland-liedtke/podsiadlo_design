import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import UnderlinedButton from '../components/UnderlinedButton';

const PublicationsPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <StaticImage src='../images/service_interior.png' alt='Wizualizacja recepcji dentysty'></StaticImage>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h2> PUBLIKACJE PROJEKTÓW W MAGAZYNACH </h2>

            <hr />

            <StaticImage src='../images/logo/mad_logo.png' alt='Logo White MAD'></StaticImage>

            <StaticImage src='../images/logo/ab_logo.png' alt='Logo A&B'></StaticImage>

            <StaticImage src='../images/logo/sznyt_logo.png' alt='Logo SZNYT'></StaticImage>

            <StaticImage src='../images/logo/noizz_logo.png' alt='Logo NOIZZ'></StaticImage>
          </Col>

          <Col>
            <h4> Architekt wnętrz | Projektant wnętrz | Gdańsk </h4>

            <p> dyp. arch. wnętrz mgr Julia Podsiadło </p>

            <p> Kontakt: julia.podsiadlo@gmail.com, tel. 607 60 27 26 </p>

            <hr />

            <UnderlinedButton></UnderlinedButton>

          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <StaticImage src='../images/service_interior2.png' alt='Wizualizacja recepcji dentysty'></StaticImage>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const Head = () => <title> Podsiadło Design - Publikacje </title>

export default PublicationsPage