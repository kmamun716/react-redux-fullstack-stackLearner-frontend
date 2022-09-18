import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/actions/authActions";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
              <Nav.Link onClick={() => dispatch(logout(navigate))}>Logout</Nav.Link>
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

export default Navigation;
