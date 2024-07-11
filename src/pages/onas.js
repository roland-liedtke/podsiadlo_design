import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'
import { StaticImage } from 'gatsby-plugin-image';
import UnderlinedButton from '../components/UnderlinedButton';

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center'>
            <StaticImage src="../images/julia_podsiadlo.png" alt='Zdjęcie Julii Podsiadło' placeholder='dominantColor'></StaticImage>
          </Col>

          <Col>
            <h2> O ZAŁOŻYCIELCE PRACOWNI </h2>

            <h4> Tworzymy unikalne miejsca dla wyjątkowych ludzi. </h4>

            <p> Dyp. arch. wnętrz mgr Julia Podsiadło </p>

            <p> Magister sztuki. Absolwentka wydziału Architektury i Wzornictwa Akademii Sztuk Pięknych w Gdańsku. W 2020 roku obroniła dyplom magisterski na kierunku Architektury Wnętrz, promotorzy prof. Beata Szymańska oraz dr hab. Paweł Czarzasty. </p>

            <p> Tematem dyplomu był “Falowiec - niedokończony ideał modernizmu”. Praca cieszyła się dużym zainteresowaniem medialnym. Jest to temat po dziś dzień żywy w sercach Gdańszczan.
            Przed założeniem własnej pracowni zdobywała doświadczenie jako asystent architekta i architekt wnętrz w renomowanych biurach w Trójmieście. </p>

            <p> Obecnie współpracuje z mgr sztuki Mileną Kulczycką tworząc unikalne projekty wnętrz prywatnych i publicznych. Od kilku lat posiada sprawdzonych fachowców, którzy realizują wnętrza zgodnie z projektami. </p>

            <hr />

            <UnderlinedButton></UnderlinedButton>

          </Col>
        </Row>
      </Container >

      <Container>
        <Row>
          <Col className='text-center'>
            <StaticImage src="../images/julia_podsiadlo2.png" alt='Zdjęcie Julii Podsiadło' placeholder='dominantColor'></StaticImage>
          </Col>

          <Col>
            <h4> Architekt wnętrz | Projektant wnętrz | Gdańsk </h4>

            <p> dyp. arch. wnętrz mgr Julia Podsiadło </p>

            <p> Kontakt: julia.podsiadlo@gmail.com, tel. 607 60 27 26 </p>

            <hr />

            <UnderlinedButton></UnderlinedButton>
          </Col>
        </Row>
      </Container >
    </div>
  )
}

export const Head = () => <title> Podsiadło Design - O nas</title>

export default AboutPage