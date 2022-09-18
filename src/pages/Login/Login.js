import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/actions/authActions';

const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: {}
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state=>state.auth);
    useEffect(()=>{
        if(auth.error?.email || auth.error?.password){
            setUser({
                ...user,
                error:auth.error
            })
        }else{
            setUser({
                ...user,
                error:{}
            })
        }
    },[auth.error])
    const handleChange=e=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit=e=>{
        e.preventDefault();
        dispatch(login({
            email: user.email,
            password: user.password
        }, navigate))
    }
    return (
        <div className='row'>
            <div className="col-md-6 offset-md-3">
                <h1 className="text-center display-4">Login Here</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type="email" 
                            placeholder='Enter Your Email'
                            onChange={handleChange}
                            className={user.error.email? 'form-control is-invalid':'form-control'}
                            name='email'
                            id='email'
                            value={user.email||''}
                        />
                        <p className='invalid-feedback'>{user.error.email}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password:</label>
                        <input 
                            type="password" 
                            placeholder='Enter Your Password'
                            onChange={handleChange}
                            className={user.error.password? 'form-control is-invalid':'form-control'}
                            name='password'
                            id='password'
                            value={user.password||''}
                        />
                        <p className='invalid-feedback'>{user.error.password}</p>
                    </div>
                    <input type="submit" className="btn btn-primary my-2" value='Login' />
                </form>
                <p>Not Have any account? <Link to='/register'>Register Here</Link></p>
            </div>
        </div>
    );
};

export default Login;