import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Banner from './Banner';
import About from './about';
import Contact from './contact';
import Home from'./Home';
import Footer from './Footer';
import Default from './default';



function App() {
  return (
    <Router>
      <>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <img src="/logo_dw.png" alt="Logo" className="h-10" width="50px"/>
          <Container>
          
            <Navbar.Brand as={Link} to="/default">DobrýWeb</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Domů</Nav.Link>
                <Nav.Link as={Link} to="/about">O mně</Nav.Link>
                <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Univerzální banner, který se mění podle aktuální cesty */}
        <Banner />

        <Routes>
          <Route path="/default" element={<Default/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
      <Footer />
    </Router>
    
  );
}

export default App;