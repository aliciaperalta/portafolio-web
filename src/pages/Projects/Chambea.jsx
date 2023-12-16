import { Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Chambea = () => {
  return (
    <Layout>
      <Container className="py-5 w-100 ">
        <Row className="d-flex justify-content-evenly bg-light p-3">
          <strong className="titulo2">Chambea Latam</strong>
          <br />
          Este proyecto fue uno en el que participe el 2022, en el realice
          diversas funciones como ser gestora del proyecto ya que tenia
          reuniones con el cliente para recibir las especificaciones de los
          requerimientos funcionales del sistema, los cuales posteriormente me
          encargaba de documentarlos y describirlos para asignarlo al
          responsable a cargo de la tarea, ademas de ello realizaba la
          supervision y testeo para asegurar que todo funcionara de forma
          correcta. Entre las otras funciones que desarrollaba era desplegar el
          sistema a produccion cuando se terminaba una fase en las que se
          completaba diversas tareas, desarrollaba diversas funcionalidades en
          el diseño del portal web la cual es la plataforma de trabajo que tiene
          diversas caracteristicas que la hacen especial como el poder encontrar
          un postulante adecuado segun los skills que se tenga en compatibilidad
          con el puesto de trabajo.
        </Row>
        <Row className="d-flex justify-content-evenly bg-light p-3">
          <Image src="/img/projects/ch2.png" className="estilo" />
          <Image src="/img/projects/ch.png" className="estilo1" />
        </Row>
      </Container>
    </Layout>
  );
};

export default Chambea;
