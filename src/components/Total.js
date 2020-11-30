import React from "react";
import "./Total.css";
import { useSelector } from "react-redux";

function Total({ total, tax, discount }) {
  const state = useSelector((state) => state.state);
  const Null = 0.0;

  return (
    <div className="total float-right  ">
      <div className="total_subtotal d-flex">
        <h2 className="total__sub"> Subtotal</h2>
        <p> {total ? total : Null}</p>
      </div>
      <div className="total_subtotal   d-flex">
        <h2 className="total__sub">Tax Total</h2>
        <p>{tax ? tax : Null}</p>
      </div>
      <div className="total_subtotal   d-flex">
        <h2 className="total__sub">Discount</h2>
        <p>{discount ? discount : Null}</p>
      </div>
      <div className="total_subtotal    total__rs d-flex">
        <h2 className="total__sub">Total</h2>
        <p>{total + Number(tax) - Number(discount)}</p>
      </div>
    </div>
  );
}

export default Total;
