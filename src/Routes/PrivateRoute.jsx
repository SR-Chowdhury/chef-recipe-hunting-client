import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const customStyle = {
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
        padding: '300px',
        marginTop: '0px',
        textAlign: 'center',
    }

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log('private route: ', location);

    if (loading) {
        return <div style={customStyle}>
            <Spinner style={{fontSize: '10px'}} animation="border" variant="danger"/>
        </div>
    }

    if (user) return children;

    return <Navigate state={{from: location}} replace to="/login"/>
};

export default PrivateRoute;