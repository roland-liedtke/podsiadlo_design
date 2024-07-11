import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import UnderlinedButton from '../components/UnderlinedButton';


const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <StaticImage src='../images/living_room_interior.png' alt='Wnętrze mieszkania - salon'></StaticImage>
          </Col>

          <Col>
            <Row>
              <StaticImage src='../images/kitchen_visualization.png' alt='Wizualizacja projektu kuchni'></StaticImage>
            </Row>
            <Row>
              <StaticImage src='../images/kitchen_interior.png' alt='Wizualizacja projektu kuchni'></StaticImage>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h2> O pracowni </h2>

            <h4> Tworzymy unikalne miejsca dla wyjątkowych ludzi. </h4>

            <p> Pracownia została założona przez absolwentkę architektury wnętrz na Akademii Sztuk Pięknych w Gdańsku. </p>

            <p> Projektowanie wnętrz to nie tylko wybór dekoracji, lecz forma sztuki oparta na doświadczeniu w wyborze materiałów, odpowiednich rozwiazań ergonomicznych i emocji, które tworzy każda osoba w swoim domu. </p>

            <p> Tworzymy projekty spersonalizowane pod danych użytkowników. Decydując się na współpracę z nami, poznamy siebie i omówimy dokładnie kierunek w którym stworzymy Twoją wymarzoną przestrzeń. Dobieramy odpowiednie rozwiązania funkcjonalne, estetykę przyjazną dla domowników oraz autorskie rozwiązania.</p>

            <p> Pracownia ma swoją siedzibę w Gdańsku. Projekty wykonujemy zdalnie na całym świecie, a nadzory na terenie całego wojewódźtwa pomorskiego.</p>

            <hr />

            <UnderlinedButton></UnderlinedButton>

          </Col>

          <Col className='text-center'>
            <StaticImage src="../images/interior_project_model.png" alt='Model projektowy wnętrza' placeholder='dominantColor'></StaticImage>
          </Col>
        </Row>
      </Container >

      <Container>
        <Row>
        <Col>
            <Row>
              <StaticImage src='../images/living_room_interior2.png' alt='Wizualizacja salonu'></StaticImage>
            </Row>
            <Row>
              <StaticImage src='../images/kitchen_visualization2.png' alt='Wizualizacja projektu kuchni'></StaticImage>
            </Row>
          </Col>

          <Col>
            <StaticImage src='../images/living_room_interior3.png' alt='Wnętrze mieszkania - salon'></StaticImage>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h4> Zastnawiasz sie nad projektem? Koniecznie napisz i stwórzy wspólnie Twoją wymarzoną przestrzeń. </h4>

            <h4> Architekt wnętrz | Projektant wnętrz | Gdańsk </h4>

            <p> dyp. arch. wnętrz mgr Julia Podsiadło </p>

            <p> Kontakt: julia.podsiadlo@gmail.com, tel. 607 60 27 26 </p>

            <hr />

            <UnderlinedButton></UnderlinedButton>

          </Col>

          <Col>
            <StaticImage src="../images/couch_interior.png" alt='Model projektowy wnętrza' placeholder='dominantColor'></StaticImage>
          </Col>
        </Row>
      </Container >
    </div>

  )
};
export const Head = () => (
  <>
    <title>Podsiadło Design</title>
    <meta name="description" content="Your description" />

    {/* Google Font - Lato  */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
  </>
);

export default HomePage