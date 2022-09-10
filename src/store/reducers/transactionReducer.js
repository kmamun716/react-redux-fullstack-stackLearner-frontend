import * as Types from '../actions/types';

const transactionReducer=(state=[], action)=>{
    switch(action.type){
        case Types.LOAD_TRANSACTIONS:{
            return action.payload.transactions
        }
        //second step, first step on transaction action
        case Types.CREATE_TRANSACTION: {
            let transactions = [...state];
            transactions.unshift(action.payload.transaction);
            return transactions;
        }
        default: return state
    }
};

export default transactionReducer;