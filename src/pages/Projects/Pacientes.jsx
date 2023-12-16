import { Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import Image from "react-bootstrap/Image";

const Pacientes = () => {
  return (
    <Layout>
      <Container className="py-5 w-100 ">
        <Row className="d-flex justify-content-evenly">
          <strong className="titulo2">
            Aplicación en control de pacientes
          </strong>
          <br />
          Este proyecto se desarrollo basicamente con JavaScript, HTML y CSS,
          ademas se utilizo la libreria de React, este consiste basicamente en
          un control de pacientes con las acciones de Añadir nuevos pacientes,
          editar los datos de ellos o eliminarlos si es necesario. Por otra
          parte se muestra una tabla con los pacientes que se añadieron
          brindando asi un mayor control de ellos. Los datos que se manejan son
          tales como el nombre, apellidos, correo, telefono, genero y lugar
          especificamente el departamento-
        </Row>
        <Row className="d-flex justify-content-evenly bg-light p-3">
          <Image src="/img/projects/pac1.png" className="estilo" />
          <Image src="/img/projects/pac2.png" fluid />
        </Row>
      </Container>
    </Layout>
  );
};

export default Pacientes;
