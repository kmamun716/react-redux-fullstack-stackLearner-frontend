import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { createTrunsaction } from "../../store/actions/transactionActions";

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

const CreateTransaction = (props) => {
  const [formData, setFormData] = useState({
    amount: 0,
    type: "",
    note: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTrunsaction(formData));
    setFormData({
      amount: 0,
      type: "",
      note: "",
    });
    props.closeModal(false)
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.closeModal(false)}
      style={customStyles}
      contentLabel="Create A New Transaction"
    >
      <form onSubmit={handleSubmit}>
        <h2>Create A New Transaction</h2>
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
          <label htmlFor="type">Select Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-select"
          >
            <option>Please Select a Type:</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
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

export default CreateTransaction;
