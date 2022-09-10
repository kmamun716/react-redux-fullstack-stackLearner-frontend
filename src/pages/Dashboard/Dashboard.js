import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import CreateTransaction from '../../components/transaction/CreateTransaction';
import UpdateTransaction from '../../components/transaction/UpdateTransaction';
import { loadTrunsactions, removeTransaction } from '../../store/actions/transactionActions';

const Dashboard = (props) => {
    const {auth, transactions} = useSelector(state=>state);
    const [createModalOpen, setIsOpen] = useState(false);
    const [updateModalOpen, setUpdateOpen] = useState(false);
    const [editData, setEditData]= useState({})
    useEffect(()=>{
        props.loadTrunsactions()
    },[props])
    const handleUpdate=(isOpen, data)=>{
        setUpdateOpen(isOpen)
        setEditData(data)
    }
    return (
        <div className='row'>
            <div className="col-md-8 offset-md-2">
                <h1>Welcome {auth?.user.name} </h1>
                <p>Your Email is: {auth?.user.email}</p>
                <button className='btn btn-primary' onClick={()=>setIsOpen(true)}>Create New Transaction</button>
                <CreateTransaction isOpen={createModalOpen} closeModal={setIsOpen}/>
                <UpdateTransaction isOpen={updateModalOpen} closeModal={setUpdateOpen} transaction={editData} />
                <br />
                <h1>Transactions:</h1>
                <ul className="list-group">
                    {
                        transactions.map(trns=><li key={trns._id} className='list-group-item'>
                            <p>Type: {trns.type}</p>
                            <p>Amount: {trns.amount}</p>
                            <p>Note: {trns.note}</p>
                            <button className='btn btn-info' onClick={()=>handleUpdate(true, trns)}>Edit</button>
                            <button className='btn btn-danger' onClick={()=>props.removeTransaction(trns._id)}>Delete</button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default connect(null, {loadTrunsactions, removeTransaction})(Dashboard);