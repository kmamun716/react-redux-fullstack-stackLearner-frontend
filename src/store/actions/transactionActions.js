import * as Types from './types';
import axios from 'axios';

export const loadTrunsactions =()=>dispatch=>{
    axios.get('http://localhost:4000/api/transaction')
        .then(res=>{
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