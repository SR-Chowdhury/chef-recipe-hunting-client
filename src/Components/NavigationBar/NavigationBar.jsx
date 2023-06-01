import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './NavigationBar.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                successAlert();
                navigate("/");
            })
            .catch(err => console.log(err.message))
    }

    const successAlert = () => toast.success('Successfully Signout!', {
        position: "top-center",
        autoClose: 1500,
        limit: 1,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <Navbar fixed="top" className='afk-navbar' bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='afk-brand' href="#"><span>A</span>sian <span>F</span>ood <span>k</span>ings</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to={`/`}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>



                        <LinkContainer to={`/blog`}>
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>

                        {
                            user ?
                                <Nav.Link>
                                    {
                                        user.photoURL ?
                                            <img
                                                title={user.displayName}
                                                src={user.photoURL}
                                                alt=""
                                                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                                            />
                                            : <FaUserCircle
                                                title={user.displayName}
                                                style={{ fontSize: '30px' }}
                                            />
                                    }
                                    <span onClick={handleLogOut} className='ms-2'>Logout</span>
                                </Nav.Link>
                                :
                                <>
                                    <LinkContainer to={`/login`}>
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to={`/register`}>
                                        <Nav.Link>Register</Nav.Link>
                                    </LinkContainer>
                                </>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container >
            <ToastContainer />
        </Navbar >

    );
};

export default NavigationBar;