import React from 'react';
import { Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

 function Models() {
  
   const [models,setModels] = React.useState([]);
   React.useEffect(() => {
   obtenerDatos()
  }, [])

   const obtenerDatos = async () => {
     const data = await fetch('https://challenge.agenciaego.tech/models');
     const modelos = await data.json();
     setModels(modelos);
   }
 
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return(
        <div>
          <h1>Acaa ESTOY</h1>
          <ul>{models.map(item=>(<li key={item.id}>{item.name}</li>))}</ul>
        <Container >
          <Row>
              <Col sm={6} xs={6} md={4} lg={4}>
                  <Image style={{maxWidth: '5rem'}} src="https://media-exp1.licdn.com/dms/image/C4E0BAQHdTfCIKN_DdA/company-logo_200_200/0/1553094225875?e=2159024400&v=beta&t=VB4X45SEDChX2eN6xmwwwjvYWnSYH5SJzMBJJ4iuoYs" roundedCircle />
                
              </Col>
              <Col sm={0} xs={0} md={4} lg={4}>
                <Nav justify variant="tabs">
                        <Nav.Item >
                          <Nav.Link style={{color: 'black'}} active><strong>Modelos</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                          <Nav.Link style={{color: 'black'}} href="/"><strong>Ficha de Modelo</strong></Nav.Link>
                        </Nav.Item>
                      </Nav>
                </Col>
                <Col sm={6} xs={6} md={4} lg={4} left>
                <NavDropdown title={<strong style={{color: 'black'}}>Menú</strong>} id="nav-dropdown">
                      <NavDropdown.Item eventKey="4.1">Nada</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.2">De <strong>menor</strong> a <strong>mayor</strong></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.3">De <strong>mayor</strong> a <strong>menor</strong></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.4">Más <strong>nuevos</strong> primero</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.5">Más <strong>viejos</strong> primero</NavDropdown.Item>
                    </NavDropdown>
                    </Col>
              </Row>
          </Container>
          <Container>
              <h1 className="container display-6"><strong>Descubrí todos los modelos</strong></h1>
          </Container>

          <Container>
              <Nav variant="tabs" activeKey="1" onSelect={handleSelect}>
              <Navbar bg="light" expand="md">
  <Navbar.Brand href="#home">Filtrar por</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
        <Nav.Link href="#home" active>Todos</Nav.Link>
        <Nav.Link href="#home" eventKey={models.map(item => item.segment)}>Autos</Nav.Link>
        <Nav.Link href="#home" eventKey={models.map(item => item.segment)}>Pickups y Comerciales</Nav.Link>
        <Nav.Link href="#home" eventKey={models.map(item => item.segment)}>SUVs y Crossovers</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
                    <NavDropdown title={<strong style={{color: 'black'}}>Ordenar por</strong>} >
                      <NavDropdown.Item eventKey="4.1" active style={{backgroundColor: 'gray'}}>Nada</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.2">De <strong>menor</strong> a <strong>mayor</strong></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.3">De <strong>mayor</strong> a <strong>menor</strong></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.4">Más <strong>nuevos</strong> primero</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.5">Más <strong>viejos</strong> primero</NavDropdown.Item>
                    </NavDropdown>
          </Nav>
          </Container>
          <Container>
            <CardDeck>
              <Row>
              {models.map(item => (
                <Col sm={12} xs={12} md={3} lg={3} >
                <Card >
                  <Card.Body>
                    <Card.Title style={{textAlign: "center"}}><strong>{item.name}</strong></Card.Title>
                    <Card.Text style={{textAlign: "center"}}>{item.year} | $ {item.price}</Card.Text>
                    <Link to={`/${item.id}`}><Card.Img variant="top" src={`https://challenge.agenciaego.tech${item.thumbnail}`}/></Link>
                  </Card.Body>
                  <Card.Footer>
                  <Button style={{justifyContent: "center"}} variant="dark">Dark</Button>
                  </Card.Footer>
                </Card> 
              </Col>
              ))}
          </Row>
          </CardDeck>
          </Container>
        
        </div>
    )
}
export default Models;