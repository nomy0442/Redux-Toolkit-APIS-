import React, {useEffect, useState} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {CgMail} from 'react-icons/cg';
import {FaPhoneAlt} from 'react-icons/fa';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './Header.css';
import {MdOutlineArrowUpward} from 'react-icons/md';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between ">
          <div className="contact-info d-flex align-items-center">
            <CgMail />
            <a href="#">home</a>

            <FaPhoneAlt style={{marginLeft: '15px'}} />
            <span>page</span>
          </div>
        </div>
      </section>

      <Navbar
        id="header"
        expand="xl"
        className={`${scrolled ? 'scrolled' : ''} ${
          isMenuOpen ? 'menu-open' : ''
        }`}
      >
        <Container fluid className="navContainer">
          <div id="logo">
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle className="" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav>
              <LinkContainer to="/user">
                <Nav.Link smooth>User</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/todo">
                <Nav.Link smooth>Todo</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/post">
                <Nav.Link smooth>Posts</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/comment">
                <Nav.Link smooth>Comments</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/service">
                <Nav.Link smooth>Services</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/profile">
                <Nav.Link smooth>profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/settings">
                <Nav.Link smooth>settings</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className={`back-to-top ${scrolled ? 'active' : ''}`}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <MdOutlineArrowUpward />
      </div>
    </>
  );
};

export default Header;
