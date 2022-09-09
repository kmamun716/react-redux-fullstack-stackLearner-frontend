import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import CreateTransaction from '../../components/transaction/CreateTransaction';
import { loadTrunsactions } from '../../store/actions/transactionActions';

const Dashboard = (props) => {
    const {auth, transactions} = useSelector(state=>state);
    const [createModalOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        props.loadTrunsactions()
    },[props])
    return (
        <div className='row'>
            <div className="col-md-8 offset-md-2">
                <h1>Welcome {auth?.user.name} </h1>
                <p>Your Email is: {auth?.user.email}</p>
                <button className='btn btn-primary' onClick={()=>setIsOpen(true)}>Create New Transaction</button>
                <CreateTransaction isOpen={createModalOpen} closeModal={setIsOpen}/>
                <br />
                <h1>Transactions:</h1>
                <ul className="list-group">
                    {
                        transactions.map(trns=><li key={trns._id} className='list-group-item'>
                            <p>Type: {trns.type}</p>
                            <p>Amount: {trns.amount}</p>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default connect(null, {loadTrunsactions})(Dashboard);