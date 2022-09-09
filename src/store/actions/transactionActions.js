import axios from 'axios';
import * as Types from './types';

export const loadTrunsactions =()=>dispatch=>{
    axios.get('http://localhost:4000/api/transaction')
        .then(res=>{
            console.log(res)
            dispatch({
                type: Types.LOAD_TRANSACTIONS,
                payload:{
                    transactions: res.data
                }
            })
        })
        .catch(err=>{
            console.log(err)
        })
}