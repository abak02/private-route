import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const location = useLocation();
    return (
        <div>
            {
                loggedInUser.email ?(children):(
                    <Navigate to='/login' state={{from : location}} replace/>

                ) 
            }
        </div>
    );
};

export default PrivateRoute;