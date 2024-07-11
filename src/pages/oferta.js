import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import PackageCard from '../components/PackageCard';

const OfferPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <StaticImage src='../images/couch_interior2.png' alt='Wizualizacja kanapy z góry'></StaticImage>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <p className='text-center'>Oferta | Pakiety projektowe | Projekty wnętrz | Trójmiasto | Gdańsk</p>

          <Col>
            <PackageCard name="MINI" description="(projekt koncepcyjny)">
              <ul>
                <li>⇨  wywiad/ankieta potrzeb</li>
                <li>⇨ rzut funkcjonalny</li>
                <li>⇨ model 3d</li>
                <li>⇨ wizualizacje 3d</li>
                <li>⇨ korekta projektu (2 zmiany)</li>
              </ul>
            </PackageCard>
          </Col>

          <Col>
            <PackageCard name="MIDI" description="(projekt wykonawczy)">
              <ul>
                <li>⇨  wywiad/ankieta potrzeb</li>
                <li>⇨ rzut funkcjonalny</li>
                <li>⇨ model 3d</li>
                <li>⇨ wizualizacje 3d</li>
                <li>⇨ korekta projektu (2 zmiany)</li>
                <li>⇨ rysunki wykonawcze</li>
                <li>⇨ projekt mebli na zamówienie</li>
                <li>⇨ spis wyposażenia</li>
              </ul>
            </PackageCard>
          </Col>

          <Col>
            <PackageCard name="MAXI" description="(projekt wykonawczy + nadzór autorski">
            <ul>
                <li>⇨  wywiad/ankieta potrzeb</li>
                <li>⇨ rzut funkcjonalny</li>
                <li>⇨ model 3d</li>
                <li>⇨ wizualizacje 3d</li>
                <li>⇨ korekta projektu (2 zmiany)</li>
                <li>⇨ rysunki wykonawcze</li>
                <li>⇨ projekt mebli na zamówienie</li>
                <li>⇨ spis wyposażenia</li>
                <li>⇨ nadzór autorski</li>
                <li>⇨ pomoc w wyborze wykonawców</li>
              </ul>
            </PackageCard>
          </Col>

          <Col>
            <PackageCard name="MAXI +" description="(projekt wykonawczy + nadzór pod klucz)">
            <ul>
                <li>⇨  wywiad/ankieta potrzeb</li>
                <li>⇨ rzut funkcjonalny</li>
                <li>⇨ model 3d</li>
                <li>⇨ wizualizacje 3d</li>
                <li>⇨ korekta projektu (2 zmiany)</li>
                <li>⇨ rysunki wykonawcze</li>
                <li>⇨ projekt mebli na zamówienie</li>
                <li>⇨ spis wyposażenia</li>
                <li>⇨ nadzór pod klucz</li>
                <li>⇨ pomoc w wyborze wykonawców</li>
                <li>⇨ zamawianie produktów</li>
                <li>⇨ koordynacja na budowie</li>
              </ul>
            </PackageCard>
          </Col>

          <p className='text-center'> Projektant wnętrz | Architekt wnętrz | Sopot | Gdańsk | Gdynia</p>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <StaticImage src='../images/chair_interior.png' alt='Wizualizacja krzesła i stołu'></StaticImage>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const Head = () => <title> Podsiadło Design - Oferta </title>

export default OfferPage
