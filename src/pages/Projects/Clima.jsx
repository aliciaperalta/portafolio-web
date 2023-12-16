import { Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import Image from "react-bootstrap/Image";

const Clima = () => {
  return (
    <Layout>
      <Container className="py-5 w-100 ">
        <Row className="d-flex justify-content-evenly">
          <strong className="titulo2">Aplicacion de clima</strong> <br />
          En este proyecto realizado en Node se realizaron dos consultas a
          diferentes endpoints el primero era a Mapbox Search API, con este se
          encuentra el lugar que se busca en consola, la aplicacion muestra las
          primeras 5 coincidencias posteriormente al seleccionar una nos muestra
          la informacion del clima con detalles especificos estos son
          encontrados gracias al API de OpenWeather ambos son gratuitos y solo
          necesitan un registro, el Mapbox Search API nos brinda un token que
          debemos guardar para hacer la respectiva consulta. Ademas se tiene el
          historial de las ultimas busquedas reaizadas.
        </Row>
        <Row className="d-flex justify-content-evenly bg-light p-3">
          <Image src="/img/projects/clima1.png" fluid />
          <Image src="/img/projects/clima2.png" fluid />
          <Image src="/img/projects/cki3.png" fluid />
        </Row>
      </Container>
    </Layout>
  );
};

export default Clima;
