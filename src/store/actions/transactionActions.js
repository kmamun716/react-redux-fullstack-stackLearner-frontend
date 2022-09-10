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
};


export const removeTransaction=transId=>dispatch=>{
    axios.delete(`http://localhost:4000/api/transaction/${transId}`)
        .then(res=>{
            dispatch({
                type: Types.REMOVE_TRANSACTION,
                payload:{
                    id: res.data._id
                }
            })
        })
        .catch(err=>console.log(err))
};

export const updateTransaction=(transId, trans)=>dispatch=>{
    axios.put(`http://localhost:4000/api/transaction/${transId}`, trans)
        .then(res=>{
            dispatch({
                type: Types.UPDATE_TRANSACTION,
                payload:{
                    transaction: res.data.transaction
                }
            })
        })
        .catch(err=>console.log(err))
}