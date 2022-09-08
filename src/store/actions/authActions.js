import axios from 'axios';
import * as Types from './types';

export const register = user => dispatch =>{
    axios.post('http://localhost:4000/api/user/register', user)
        .then(res=>console.log(res))
        .catch(err=>{
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: err.response.data
                }
            })
        })
}