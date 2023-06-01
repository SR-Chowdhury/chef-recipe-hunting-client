import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ height: '500px'}}>
            <div className='text-center mt-5'>
                <img width={'100%'} src="https://cdn-icons-png.flaticon.com/512/284/284270.png" alt="" />
                {/* <h1 className='text-danger text-center'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p> */}
            </div>
        </Container>
    );
};

export default ErrorPage;