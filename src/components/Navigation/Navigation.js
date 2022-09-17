import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/actions/authActions";

const Navigation = (props) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // console.log(auth)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Money App</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          {auth.isAuthenticated ? (
            <>
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={() => props.logout(navigate)}>Logout</Nav.Link>
            </>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default connect(null, { logout })(Navigation);
