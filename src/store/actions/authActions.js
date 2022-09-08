import axios from 'axios';

export const register = user => dispatch =>{
    axios.post('http://localhost:4000/api/user/register', user)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}