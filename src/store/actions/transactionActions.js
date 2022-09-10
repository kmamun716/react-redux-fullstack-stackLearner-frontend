import axios from 'axios';
import * as Types from './types';

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
};


//first step, next step on transaction reducer file
export const createTrunsaction=trans=>dispatch=>{
    axios.post('http://localhost:4000/api/transaction', trans)
        .then(res=>{
            dispatch({
                type: Types.CREATE_TRANSACTION,
                payload:{
                    transaction: res.data
                }
            })
        })
        .catch(err=>console.log(err))
}