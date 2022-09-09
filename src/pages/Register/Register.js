import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../store/actions/authActions';


const Register = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: {}
    });
    const navigate = useNavigate();

    //connect redux help of react-redux
    const auth = useSelector(state=>state.auth);
    useEffect(()=>{
        if(auth.error?.name || auth.error?.email || auth.error?.password || auth.error?.confirmPassword){
            setUser({
                ...user,
                error:auth.error
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
        props.register({
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        }, navigate)
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
                            className={user.error.name? 'form-control is-invalid':'form-control'}
                            name='name'
                            id='name'
                            value={user.name||''}
                        />
                        <p className='invalid-feedback'>{user.error.name}</p>
                    </div>
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
                    <div className="form-group">
                        <label htmlFor='confirmPassword'>confirmPassword:</label>
                        <input 
                            type="password" 
                            placeholder='Enter Your Password Again'
                            onChange={handleChange}
                            className={user.error.confirmPassword? 'form-control is-invalid':'form-control'}
                            name='confirmPassword'
                            id='confirmPassword'
                            value={user.confirmPassword||''}
                        />
                        
                        <p className='invalid-feedback'>{user.error.confirmPassword}</p>
                    </div>
                    <input type="submit" className="btn btn-primary my-2" value='Register' />
                </form>
                <p>Already Have account? <Link to='/login'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default connect(null, {register})(Register);