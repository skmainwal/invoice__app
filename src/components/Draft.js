import React, { useState } from "react";
import "./Draft.css";
import { Invoice_No } from "../store/action";
import { useDispatch } from "react-redux";
import Invoice from "./Invoice";
function Draft() {
  const dispatch = useDispatch();
  const [invoive_no, setInvoice_no] = useState("");
  return (
    <div className="draft">
      <div className="draft__top">
        <p2 className="draft_button"> Draft</p2>

        <input
          className="draft__top_input"
          type="text"
          value=""
          placeholder="Invoice"
          onChange=""
        />
      </div>

      <textarea
        className="draft__mid"
        rows="4"
        cols="100"
        placeholder="Add Descrption..."
      />

      <div className="draft__bottom">
        <div className="draft__bottom__left">
          <p>Invoice No</p>
          <div className=" invoice_no   d-flex">
            <h2 className=" ">#</h2>
            <input
              className=""
              type="text"
              placeholder=""
              value={invoive_no}
              onChange={(e) => {
                setInvoice_no(e.target.value);
                dispatch(Invoice_No(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="draft__bottom_right ">
          <div>
            <p>Language</p>
            <select className="language border p-3 bg-gray">
              <option value="English">English(US)</option>
              <option value="Hindi">Hindi</option>
              <option value="chinese">Chinese</option>
              <option value="korean" selected>
                korean
              </option>
            </select>
          </div>
          <div className="">
            <p> Currency</p>
            <select className="currency border p-3 bg-gray ">
              <option value="USD">United States Dollar-USD</option>
              <option value="INR">Indian Rupee - INR</option>
              <option value="EUR">Euro - EUR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draft;
