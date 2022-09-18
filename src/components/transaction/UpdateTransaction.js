import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../../store/actions/transactionActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));


const UpdateTransaction = (props) => {
  const [formData, setFormData] = useState({
    amount: 0,
    note: "",
  });

  const dispatch= useDispatch();

  useEffect(()=>{
    setFormData({
        amount: props.transaction.amount,
        note: props.transaction.note
    })
  },[props.transaction.amount, props.transaction.note])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTransaction(props.transaction._id, formData))
    props.closeModal(false)
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.closeModal(false)}
      style={customStyles}
      contentLabel="Update Transaction"
    >
      <form onSubmit={handleSubmit}>
        <h2>Update Transaction</h2>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            id="amount"
            placeholder="Enter Amount"
            onChange={handleChange}
            value={formData.amount || ""}
          />
        </div>
    
        <div className="form-group">
          <label htmlFor="note">Note</label>
          <textarea
            className="form-control"
            placeholder="Enter Note"
            name="note"
            id="note"
            onChange={handleChange}
            value={formData.note || ""}
          />
        </div>
        <input type="submit" className="btn btn-success mt-2" value="Submit" />
      </form>
    </Modal>
  );
};

export default UpdateTransaction;
