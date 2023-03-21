import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo-1.jpg'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Header () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
          <div class="navbar-nav m-2">
                <Nav.Link bg-none href="#modalScrollableCenter" data-bs-toggle="modal" onClick={handleShow} className="wish-zoom ms-auto nav-item nav-link">
                    <img width="30px" height="30px" src="https://cdn3.iconfinder.com/data/icons/jolly-icons-free/64/cart_64.png" alt=""/><span class="badge bg-danger">4</span></Nav.Link>
                <a class="ms-auto wish-zoom nav-item nav-link" href="#modalSignin"  data-bs-toggle="modal">
                    <img width="30px" height="30px" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-64.png" alt="Log in"/></a>
                </div>
        </Navbar.Collapse>
      </Container>
    
    <Modal id="modalScrollableCenter" className='modal-lg modal-dialog-centered modal-dialog-scrollable shadow-lg' show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title className='mx-3'>
            <h3 class="modal-title">Your Cart</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-3'>
          <div class="d-md-flex gap-2">
            <img width="50px" height="50px" src="./projectassets/acc1.jpg" alt=""/><p class="mb-0 fw-bolder ms-3">LOTUS BRUSHLESS 18V X-Line Cordless Impact Drill w/2pcs Battery Charger & Hard Case LTHD18VLI-2BLX</p>
                        <button type="button" class="py-0 text-nowrap btn-sm btn btn-danger text-light">Cancel</button>
                        <button type="button" data-bs-target="" class="py-0 text-nowrap btn-sm btn btn-primary text-light" data-href="checkout.html">Check-out</button></div>
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
  );
}

export default Header;