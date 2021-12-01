import React from "react";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Accordion } from "react-bootstrap";

//imagenes
import Imagen1 from "../../components/Img/diego.jpg";
import Imagen2 from "../../components/Img/jesus.jpg";
import Imagen3 from "../../components/Img/sebastian.jpg";
import Imagen4 from "../../components/Img/ivan.jpg";
import Imagen5 from "../../components/Img/Andres.jpg";
import Imagen6 from "../../components/Img/frutos1.jpg";

import "./about.css";

function About(params) {
  return (
    <>
      <body id="body_about">
        <div>
          <Nav />
        </div>
        <Container id="about-container" fluid>
          <div>
            <Row>
              <Col id="texto-proyecto" xl={true}>
                <p>
                  El proyecto Munchique tiene como inicio la identificación de
                  una problemática que presentan los emprendimientos rurales en
                  la región del cauca, esta problemática esta relacionada con el
                  ciclo de vida del emprendimiento y como este pierde impacto en
                  el mercado al pasar al límite familiar o local; en tendiendo
                  esto y fijándonos en indicadores de búsqueda que se realizan
                  en internet, creemos que se debe fortalecer el vector de
                  visibilidad de los productos haciendo uso de canales digitales
                  que le permitan al productor exponer y ponerse en contacto con
                  los potenciales clientes. Es de esta forma que nace MUNCHIQUE,
                  una plataforma de productos en donde los emprendimientos
                  campesinos tienen la posibilidad de mostrar, promocionar,
                  comercializar y generar redes de trabajo que propendan por la
                  generación de oportunidades, reducción de intermediarios,
                  además de la apropiación y uso de herramientas digitales
                </p>
              </Col>
              <Col xl={true}>
                <Image id="img6" src={Imagen6} thumbnail />
              </Col>
              <Col xs={1}></Col>
            </Row>
          </div>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>EQUIPO DE TRABAJO</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col xl={true}>
                      <Image id="img1" src={Imagen1} roundedCircle fluid />
                    </Col>
                    <Col id="texto1" xs={true}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget varius tellus. Curabitur ultrices nulla vitae
                        ligula congue feugiat. Fusce rhoncus elementum feugiat.
                        Nullam hendrerit dolor neque, id dictum libero
                        ullamcorper sed. Ut sit amet venenatis nunc. Suspendisse
                        tincidunt dignissim mollis.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={true}>
                      <Image id="img2" src={Imagen2} roundedCircle fluid />
                    </Col>
                    <Col id="texto2" xs={true}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget varius tellus. Curabitur ultrices nulla vitae
                        ligula congue feugiat. Fusce rhoncus elementum feugiat.
                        Nullam hendrerit dolor neque, id dictum libero
                        ullamcorper sed. Ut sit amet venenatis nunc. Suspendisse
                        tincidunt dignissim mollis.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={true}>
                      <Image id="img3" src={Imagen3} roundedCircle fluid />
                    </Col>
                    <Col id="texto3" xs={true}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget varius tellus. Curabitur ultrices nulla vitae
                        ligula congue feugiat. Fusce rhoncus elementum feugiat.
                        Nullam hendrerit dolor neque, id dictum libero
                        ullamcorper sed. Ut sit amet venenatis nunc. Suspendisse
                        tincidunt dignissim mollis.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={true}>
                      <Image id="img4" src={Imagen4} roundedCircle fluid />
                    </Col>
                    <Col id="texto4" xs={true}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget varius tellus. Curabitur ultrices nulla vitae
                        ligula congue feugiat. Fusce rhoncus elementum feugiat.
                        Nullam hendrerit dolor neque, id dictum libero
                        ullamcorper sed. Ut sit amet venenatis nunc. Suspendisse
                        tincidunt dignissim mollis.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={true}>
                      <Image id="img5" src={Imagen5} roundedCircle fluid />
                    </Col>
                    <Col id="texto5" xs={true}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget varius tellus. Curabitur ultrices nulla vitae
                        ligula congue feugiat. Fusce rhoncus elementum feugiat.
                        Nullam hendrerit dolor neque, id dictum libero
                        ullamcorper sed. Ut sit amet venenatis nunc. Suspendisse
                        tincidunt dignissim mollis.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
        <div>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default About;
