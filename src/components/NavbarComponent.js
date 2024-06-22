import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar className="bg-gradient-danger text-white" expand="lg">
            <Container>
                <Navbar.Brand href="#"><img src={`/image/01.png`}
                    alt="Brand Logo"
                    width='100%'
                    height="50"
                    color='white'
                    className="d-inline-block align-top"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
                <Navbar.Collapse id="navbarTogglerDemo01">
                    <Nav className="me-auto mt-2 mt-lg-0">
                        <Nav.Link href="#" className="active">
                            Home
                        </Nav.Link>

                    </Nav>
                    <Form className="d-flex my-2 my-lg-0 text-dark">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-sm-2 "
                            style={{ color: 'black !important',marginRight:'10px' }}
                            aria-label="Search"
                        />
                        <Button  variant="outline-success" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavbarComponent;