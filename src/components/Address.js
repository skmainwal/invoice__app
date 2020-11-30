import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Address.css";

function Address() {
  const [clientOrder, setClientOrder] = useState({
    invoice_due: "",
    order_no: "",
    date: "",
  });
  const State = useSelector((st) => st);
  const { name, email, address, city, state } = State.company;
  //const { Cname, Cemail, Caddress, Ccity, Cstate } = State.client_Add;
  const company_id = "company";
  const client_id = "client";
  // console.log(comp_name, email, address, city);
  console.log(clientOrder);

  return (
    <div className="address d-flex">
      <div className="address_shift_left">
        <div className="address__left">
          <div className="add__left_top">
            <div className="address__left_top">
              <p className="shift_right">From</p>
              <Link to={`/company_address/${company_id}`}>
                <p className="text-primary cursor">Edit Business Profile</p>
              </Link>
              <div className="add">
                <p>{name}</p>
                <p>{email}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex">
              <p className="shift_right">To</p>
              <Link to={`/company_address/${client_id}`}>
                <p className="text-primary cursor">New Client</p>
              </Link>
            </div>
            <div className="add">
              <p>{State.client_Add.name}</p>
              <p>{State.client_Add.email}</p>
              <p>{State.client_Add.address}</p>
              <p>{State.client_Add.city}</p>
              <p>{State.client_Add.state}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="address__right  ">
        <p>Date</p>
        <input
          type="date"
          name="date"
          value={clientOrder.date}
          onChange={(e) =>
            setClientOrder({
              ...clientOrder,
              [e.target.name]: [e.target.value],
            })
          }
        />
        <p>Invoice Due</p>
        <select
          className="invoice__due "
          value={clientOrder.invoice_due}
          name="invoice_due"
          onChange={(e) =>
            setClientOrder({
              ...clientOrder,
              [e.target.name]: [e.target.value],
            })
          }
        >
          <option value="reciept">Due on Receipt</option>
          <option value="After 7 days " name="Aft_7">
            After 7 days
          </option>
          <option value="  After 15 days" name="Aft_15">
            After 15 days
          </option>
          <option value=" After 30 days " name="Aft_30">
            After 30 days
          </option>
          <option value="  After 45 days" name="Aft_45" selected>
            After 45 days
          </option>
        </select>
        <p>Purchase Order Number</p>
        <input
          type="text"
          placeholder=""
          value={clientOrder.order_no}
          name="order_no"
          onChange={(e) =>
            setClientOrder({
              ...clientOrder,
              [e.target.name]: [e.target.value],
            })
          }
        />
      </div>
    </div>
  );
}

export default Address;
