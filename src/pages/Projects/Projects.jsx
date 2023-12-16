import { Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <Layout>
      <Container className="py-5 w-100 ">
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem", margin: "40px" }} className="d-flex">
            <Card.Img variant="top" src="/img/projects/chambea.png" />
            <Card.Body>
              <Card.Title>Chambea Latam</Card.Title>
              <Card.Text>
                El proyecto Chambea Latam fue desarrollado el 2022, es un portal
                de trabajo para brindar mayores oportunidades de empleo a una
                mayor cantidad de personas. <br />
                TEC: HTML, CSS, JS, TYPESCRIPT
              </Card.Text>
              <Button variant="primary">
                <NavLink className="nav-link" to={"/chambea"}>
                  Explorar
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin: "40px" }}>
            <Card.Img variant="top" src="/img/projects/gore.jpg" />
            <Card.Body>
              <Card.Title>Gore MPD</Card.Title>
              <Card.Text>
                Portal desarrollado con Drupal, el cual se encarga de ofrecer
                injertos vasculares, dispositivos endovasculares e
                intervecionistas y mallas quirurgicas. <br /> TEC: Drupal, PHP
              </Card.Text>
              <Button variant="primary">
                <NavLink className="nav-link" to={"/gore"}>
                  Explorar
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Card style={{ width: "18rem", margin: "40px" }}>
            <Card.Img variant="top" src="/img/projects/openweather.png" />
            <Card.Body>
              <Card.Title>Aplicación climatologica</Card.Title>
              <Card.Text>
                Esta es una aplicacion que se muestra en la terminal, donde se
                realizan 2 peticiones a diferentes APIS, para obtener la
                informacion necesaria del lugar que se busca y del clima que se
                tiene actualmente en él.
                <br /> TEC: Node
              </Card.Text>
              <Button variant="primary">
                <NavLink className="nav-link" to={"/clima"}>
                  Explorar
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin: "40px" }}>
            <Card.Img variant="top" src="/img/projects/pacientes.jpg" />
            <Card.Body>
              <Card.Title>Control en pacientes</Card.Title>
              <Card.Text>
                Web desarrollada como un ejercicio para el control de pacientes,
                donde se utilizo el framework de React.
                <br />
                TECs: HTML, CSS, JS, REACT
              </Card.Text>
              <Button variant="primary">
                <NavLink className="nav-link" to={"/pacientes"}>
                  Explorar
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Layout>
  );
};

export default Projects;
