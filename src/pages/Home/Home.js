import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';

const Home = () => {
    const auth = useSelector(state=>state.auth);
    const navigate = useNavigate();
    console.log(auth)
    return (
        <div>
            this is home
            {
                auth.isAuthenticated ? <button onClick={()=>logout(navigate)} className='btn btn-danger'>Logout</button> : <Link to="/login" className='btn btn-primary'>Login</Link>
            }
        </div>
    );
};

export default Home;