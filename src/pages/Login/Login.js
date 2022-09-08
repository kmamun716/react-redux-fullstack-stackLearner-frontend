import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: {}
    });
    const handleChange=e=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(user)
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
                            className='form-control'
                            name='email'
                            id='email'
                            value={user.email||''}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password:</label>
                        <input 
                            type="password" 
                            placeholder='Enter Your Password'
                            onChange={handleChange}
                            className='form-control'
                            name='password'
                            id='password'
                            value={user.password||''}
                            required
                        />
                    </div>
                    <input type="submit" className="btn btn-primary my-2" value='Login' />
                </form>
                <p>Not Have any account? <Link to='/register'>Register Here</Link></p>
            </div>
        </div>
    );
};

export default Login;