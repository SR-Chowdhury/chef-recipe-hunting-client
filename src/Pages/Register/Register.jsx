import React, { useContext, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { user, createUser } = useContext(AuthContext); 
    const [accepted, setAccepted] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmitForm = (event) => {

        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (password.length < 6) {
            setError('Password Lenght must be 6 characters');
        }

        createUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                form.reset();
                toast("User Created Successfully!");
                setSuccess('User Created Successfully!');
                updateUserProfile(loggedInUser, name, photo);
                navigate('/');
            })
            .catch(err => setError(err.message))

    }

    const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then( () => console.log('name successfully updated'))
            .catch(err => setError(err.message))
    }

    const handleCheckBox = (event) => {
        setAccepted(event.target.checked);
    }



    return (
        <div className='container'>

            <div className="section-title text-center section-title-override">
                <h1 style={{ fontSize: '26px' }}>Register your Account</h1>
                <div className='section-title-bottom'>
                    <span className='slt'></span>
                    <span style={{ color: 'var(--primary-color' }}>Ready To Go</span>
                    <span className='srt'></span>
                </div>
            </div>

            <form onSubmit={handleSubmitForm} className='form-container shadow'>

                <div className="form-group">
                    <label>Name <code>*</code> </label>
                    <input type="text" name='name' className="form-control" required placeholder="Enter Your Name" />
                </div><br />

                <div className="form-group">
                    <label>Email address <code>*</code></label>
                    <input type="email" name='email' className="form-control" required placeholder="Enter Your Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div><br />

                <div className="form-group">
                    <label>Password <code>*</code></label>
                    <input type="password" name='password' className="form-control" required id="exampleInputPassword1" placeholder="Password" />
                </div><br />

                <div className="form-group">
                    <label>Photo URL <code>(Optional)</code></label>
                    <input type="text" name='photo' className="form-control" placeholder="Paste Photo URL" />
                </div><br />

                <div className="form-group form-check">
                    <input type="checkbox" onClick={handleCheckBox} className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Accept Tersm And Conditions</label>
                </div><br />

                <button type="submit" disabled={!accepted} className="primaryBtn w-100">Register</button>

                {
                    success && <p className="form-text mt-2 text-success text-center">{success}</p>
                }
                {
                    error && <p className="form-text mt-2 text-success text-danger">{error}</p>
                }
                <div className='mt-3'>
                    <small className="form-text text-muted">Already Have an Account? <Link to="/login" className='text-decoration-none' style={{color: 'var(--primary-color)'}}>Login</Link></small>
                </div>

            </form><br /><br /><br />
            <ToastContainer />
        </div>
    );
};

export default Register;