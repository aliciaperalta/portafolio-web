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
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <Container className="py-5 w-100 ">
        <Row>
          <Col className="bg-light p-4">
            <OffcanvasTitle className="titulo">
              Soy una desarrolladora Web!
            </OffcanvasTitle>
            <OffcanvasBody>
              Hola mi nombre es Alicia Peralta Linares, actualmente soy
              bachiller en la carrera de ingenieria de sistemas, de lo cual me
              siento muy orgullosa. Al transcurso de mis estudios he
              desarrollado muchos proyectos para diversas empresas y entidades,
              cada uno de ellos fue un gran desafio y oportunidad para crecer
              profesionalmente. Uno de los logros mas importantes en mi carrera
              fue ser co-autora del libro Curso relampágo Drupal 10
              Site-Builnding, fue una gran experiencia donde aprendi mas sobre
              este CMS, junto con mi lider a cargo. <br />
              Aqui pueden ver las fotos de este gran momento !
            </OffcanvasBody>
            <Row>
              <Col>
                <Image src="/img/libro.jpg" fluid className="img anim" />
              </Col>
              <Col>
                <Image src="/img/libro2.jpg" fluid className="img anim" />
              </Col>
            </Row>
          </Col>
          <Col className=" d-flex flex-column justify-content-center">
            <Image src="/img/foto2.jpg" fluid className="" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
