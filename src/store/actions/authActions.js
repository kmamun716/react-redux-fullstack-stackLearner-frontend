import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import * as Types from './types';

export const register = (user, navigate) => dispatch =>{
    axios.post('http://localhost:4000/api/user/register', user)
        .then(res=>{
            dispatch({
                type: Types.USERS_ERROR,
                payload:{
                    error: {}
                }
            })
            console.log(res)
            navigate('/login')
        })
        .catch(err=>{
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: err.response?.data
                }
            })
        })
};

export const login = (user, navigate) => dispatch =>{
    axios.post('http://localhost:4000/api/user/login', user)
        .then(res=>{
            let token = res.data.token;
            localStorage.setItem("accessToken", token);
            setAuthToken(token);
            const decoded = jwtDecode(token);
            dispatch({
                type: Types.SET_USER,
                payload:{
                    user: decoded
                }
            })
            navigate('/')
        })
        .catch(err=>{
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: err.response?.data
                }
            })
        })
};


export const logout = navigate =>{
    localStorage.removeItem("accessToken");
    navigate("/login")
    return {
        type: Types.SET_USER,
        payload:{
            user: {}
        }
    }
}