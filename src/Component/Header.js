import { Button,Container,Form,Nav,Navbar,Modal,Row,Col,Image} from "react-bootstrap";
import logo from '../assets/logo-1.jpg'
import phoneLogo from "../assets/icons8-phone-24.png"
import React, { useState } from 'react';

function Header () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( 
    <>
    {/* <header>
  <div className="container-fluid bg-dark text-light">
    <div className="header-cont d-flex gap-3 px-4 py-3 align-content-center">
      <div className="row">
        <p className="col-md-2 p-0 m-0 text-nowrap">CALL US:</p>
        <div className="col-md-5 d-flex gap-1">
          <img width="20px" height="20px" src={phoneLogo} alt="phone logo" />
          <p className="text-nowrap p-0 m-0">(02)8-921-0000</p>
        </div>
        <div className="col-md-5 d-flex gap-1">
          <img width="20px" height="20px" src={phoneLogo} alt="phone logo" />
          <p className="text-nowrap p-0 m-0">(02)8-921-0000</p>
        </div>
      </div>
      <div className="d-flex gap-3 align-content-center ms-auto">
        <a href="/">
          <img width="25px" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png" alt="facebook logo" />
        </a>
        <a href="/">
          <img width="25px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt="Twitter logo" />
        </a>
        <a href="/">
          <img width="25px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Instagram logo" />
        </a>
      </div>
    </div>
  </div>
  </header> */} 

<header>
  <Container fluid className="bg-dark text-light">
    <div className="header-cont d-flex gap-3 px-4 py-3 align-content-center">
      <Row className="row">
        <Col md={2} className="p-0 m-0 text-nowrap">CALL US:</Col>
        <Col md={5} className="d-flex gap-1">
          <Image width="20px" height="20px" src={phoneLogo} alt="phone logo" />
          <p className="text-nowrap p-0 m-0">(02)8-921-0000</p>
        </Col>
        <Col md={5} className="d-flex gap-1">
          <Image width="20px" height="20px" src={phoneLogo} alt="phone logo" />
          <p className="text-nowrap p-0 m-0">(02)8-921-0000</p>
        </Col>
      </Row>
      <div className="d-flex gap-3 align-content-center ms-auto">
        <Nav.Link href="/">
          <Image width="25px" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png" alt="facebook logo" />
        </Nav.Link>
        <Nav.Link href="/">
          <Image width="25px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt="Twitter logo" />
        </Nav.Link>
        <Nav.Link href="/">
          <Image width="25px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Instagram logo" />
        </Nav.Link>
      </div>
    </div>
  </Container>
  </header>

    <Navbar expand="lg" className="navbar">
      <Container fluid className='mx-4'>
        <Navbar.Brand href="/" className="navbar-brand me-5 px-2">
          <img width="140px" src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link href="/action1">PRODUCTS</Nav.Link>
            <Nav.Link href="/action2">PROMOTIONS</Nav.Link>
  
            <Nav.Link href="/3">SERVICES</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <div className="navbar-nav m-2">
                <Nav.Link bg-none href="#modalScrollableCenter" data-bs-toggle="modal" onClick={handleShow} className="wish-zoom ms-auto nav-item nav-link">
                    <img width="30px" height="30px" src="https://cdn3.iconfinder.com/data/icons/jolly-icons-free/64/cart_64.png" alt=""/><span className="badge bg-danger">1</span></Nav.Link>
                <a className="ms-auto wish-zoom nav-item nav-link" href="#modalSignin"  data-bs-toggle="modal">
                    <img width="30px" height="30px" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-64.png" alt="Log in"/></a>
                </div>
        </Navbar.Collapse>
      </Container>
    
    <Modal id="modalScrollableCenter" className='modal-lg modal-dialog-centered modal-dialog-scrollable shadow-lg modal-dialog' centered show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title className='mx-3'>
            <h3 className="modal-title">Your Cart</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-3'>
          <div className="d-md-flex gap-2">
            <img width="50px" height="50px" src="./projectassets/acc1.jpg" alt=""/><p className="mb-0 fw-bolder ms-3">LOTUS BRUSHLESS 18V X-Line Cordless Impact Drill w/2pcs Battery Charger & Hard Case LTHD18VLI-2BLX</p>
                        <button type="button" className="py-0 text-nowrap btn-sm btn btn-danger text-light">Cancel</button>
                        <button type="button" data-bs-target="" className="py-0 text-nowrap btn-sm btn btn-primary text-light" data-href="checkout.html">Check-out</button></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
    </>
  );
}

export default Header;