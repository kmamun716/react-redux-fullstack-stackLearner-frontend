import axios from 'axios';
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
}