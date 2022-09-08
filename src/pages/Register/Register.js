import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../store/actions/authActions';


const Register = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: {}
    });

    //connect redux help of react-redux
    const auth = useSelector(state=>state.user);
    const dispatch= useDispatch();
    const handleChange=e=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit=e=>{
        e.preventDefault();
        props.register({
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })
    }
    return (
        <div className='row'>
            <div className="col-md-6 offset-md-3">
                <h1 className="text-center display-4">Register Here</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor='name'>Name:</label>
                        <input 
                            type="text" 
                            placeholder='Enter Your Name'
                            onChange={handleChange}
                            className='form-control'
                            name='name'
                            id='name'
                            value={user.name||''}
                        />
                    </div>
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='confirmPassword'>confirmPassword:</label>
                        <input 
                            type="password" 
                            placeholder='Enter Your Password Again'
                            onChange={handleChange}
                            className='form-control'
                            name='confirmPassword'
                            id='confirmPassword'
                            value={user.confirmPassword||''}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary my-2" value='Register' />
                </form>
                <p>Already Have account? <Link to='/login'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default connect(null, {register})(Register);