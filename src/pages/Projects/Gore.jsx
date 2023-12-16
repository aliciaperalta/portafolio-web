import { Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import Image from "react-bootstrap/Image";

const Gore = () => {
  return (
    <Layout>
      <Container className="py-5 w-100 ">
        <Row className="d-flex justify-content-evenly">
          <strong className="titulo2">Gore Medical</strong> <br />
          Este proyecto para Gore Medical fue realizado el 2022, en este realice
          varias funcionalidades que se requerian para el diseño de la
          plataforma web todo ello con ayuda del CMS Drupal, las tareas se
          describian adecuadamente para observar el caso y posteriormente se
          realizaban capturas para resaltar la solución, estas deespues eran
          supervisadas para que se unieran a producción. El equipo de
          profesionales que constituia este proyecto era muy diverso ya que eran
          de diferentes nacionalidades.
        </Row>
        <Row className="d-flex justify-content-evenly bg-light p-3">
          <Image src="/img/projects/go1.png" fluid />
          <Image src="/img/projects/go2.png" fluid />
        </Row>
      </Container>
    </Layout>
  );
};

export default Gore;
