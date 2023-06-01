import React, { useContext, useState } from 'react';
import './Login.css';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const {user, signInUser, googleSignIn, githubSignIn} = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login route: ', location);
    const from = location.state?.from?.pathname || "/";

    const handleSubmitForm = (event) => {

        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                form.reset();
                successAlert();                
                setSuccess('Successfully Login!');
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))
        
    }

    const successAlert = () => toast.success('Successfully login!', {
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

    const hangleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                successAlert();
                navigate(from, { replace: true });  
            })
            .catch( err => console.log(err.message))
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedInUser = result.user;
                successAlert(); 
                navigate(from, { replace: true }); 
            })
            .catch(err => console.log(err.message))
    }



    return (
        <div className='container'>

            <div className="section-title text-center section-title-override">
                <h1 style={{ fontSize: '26px' }}>Login your Account</h1>
                <div className='section-title-bottom'>
                    <span className='slt'></span>
                    <span style={{ color: 'var(--primary-color' }}>Ready To Go</span>
                    <span className='srt'></span>
                </div>
            </div>

            <form onSubmit={handleSubmitForm} className='form-container shadow'>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" required aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div><br />

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" required placeholder="Password" />
                </div><br />

                <button type="submit" className="primaryBtn w-100">Login</button>

                {
                    success && <p className="form-text mt-2 text-success text-center">{success}</p>
                }
                {
                    error && <p className="form-text mt-2 text-success text-danger">{error}</p>
                }

                <div className='mt-3'>
                    <small className="form-text text-muted">New at this website? <Link to="/register" className='text-decoration-none' style={{color: 'var(--primary-color)'}}>Register</Link></small>
                </div>

                <div className="section-title text-center mt-3">
                    <div className='section-title-bottom'>
                        <span className='slt'></span>
                        <span style={{ color: 'var(--primary-color' }}>Or</span>
                        <span className='srt'></span>
                    </div>
                </div>
                <button type="submit" onClick={hangleGoogleSignIn} className="primaryBtn w-100"><FaGoogle /> Sign in with Google</button>
                <button type="submit" onClick={handleGithubSignIn} className="primaryBtn w-100 mt-3"><FaGithub /> Sign in with Github</button>

            </form><br /><br /><br />
            <ToastContainer />
        </div>
    );
};

export default Login;