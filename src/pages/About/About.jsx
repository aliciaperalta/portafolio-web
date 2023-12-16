import React from "react";
import Layout from "../../components/Layout";
import {
  Col,
  Container,
  Row,
  OffcanvasBody,
  OffcanvasTitle,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <Container className="py-5 ">
        <Row>
          <Col className=" d-flex flex-column justify-content-center bg-dark">
            <Image src="/img/CV.jpg" fluid className="animacion" />
            <span className="style text-light pt-4">REDES SOCIALES </span>
            <ul>
              <li>
                <a href="https://github.com/aliciaperalta">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/peralta_linares">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/alicia_peraltajk/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/alicia.peraltalinares/">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col className="bg-light p-4">
            <OffcanvasTitle className="titulo">
              Alicia Peralta Linares
            </OffcanvasTitle>
            <OffcanvasBody>
              <span className="bloque">
                Mi objetivo es desenvolverme satisfactoriamente en el ámbito
                laboral, cumpliendo con lo solicitado por las empresas y poder
                crecer más como profesional.
              </span>
              <span className="bloque">
                Fecha de Nacimiento: 07 de marzo del 2000
              </span>
              <span className="bloque">DNI:76549095</span>
              <span className="bloque">
                Dirección: Parcelación MZ Q LT.10-A Cocharcas Bajo, Chorrillos
              </span>
              <span className="bloque">Teléfono: 927427975</span>
              <span className="bloque">E-mail: aperaltal@autonoma.edu.pe</span>
              <br />
              <span className="bloque color"> Formación académica</span>
              <span className="bloque">
                UNIVERSIDAD AUTÓNOMA DEL PERÚ
                <span className="bloque">
                  Bachiller de Ingeniería de Sistemas
                </span>
              </span>
              <br />
              <span className="bloque color">
                Tecnologías y/o lenguajes que manejo
              </span>
              • Drupal <br />• JavaScript
              <br /> • HTML/CSS <br /> • React <br />• PHP <br />• MySql
              <span className="bloque color">
                <br />
                Experiencia
              </span>
              <span className="bloque">Desarrolladora FullStack/Analista</span>
              <span className="bloque">
                Enero 2022 - Marzo 2023 Heydru!- Villa El Salvador, Lima, Perú
              </span>
              <span className="bloque">
                Cumplir funciones en programación de diversas paginas web,
                analisis de datos, asistencia en proyectos, realizar test de QA
                en Drupal y gestión de redes sociales.
              </span>
            </OffcanvasBody>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
