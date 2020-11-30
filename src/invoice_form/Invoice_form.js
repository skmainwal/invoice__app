import React from "react";
import Total from "../components/Total";
import "./Invoice_form.css";
import { useSelector } from "react-redux";
function Invoice_form() {
  const State = useSelector((state) => state);
  console.log(State);
  return (
    <div className="container border invoice_form_bo bg-red">
      <h1> INVOICE</h1>
      <div className=" d-flex">
        <div className="invoice__ ">
          <p>Invoice number</p>
          <p>{State.invoice_no}</p>
        </div>
        <div>
          <p> Date of issue </p>

          <p>{State.invoice_order.date}</p>
        </div>
      </div>
      <div className="address d-flex">
        <div className="billed">
          <p>Billed to</p>
          <div>
            <p>{State.client_Add}</p>
          </div>
        </div>
        <div>
          <p>From</p>
          <div>
            <p>{State.company}</p>
          </div>
        </div>
      </div>
      <div className="invoive_bottom d-flex">
        <div className="invoice_desc">
          <p>Description</p>
          <div>
            <p>{State.description}</p>
          </div>
        </div>
        <div className="invoice__mid">
          <div className=" invoice__mid__ d-flex">
            <div className="invoice__right">
              <p>Unit Cost</p>
              <p>{State.rate}</p>
            </div>

            <div className="invoice__right">
              <p>Qty</p>
              <p>{State.quantity} </p>
            </div>
            <div className="invoice__right">
              <p>Amount</p>
              <p>{State.rate * Number(State.quantity)}</p>
            </div>
          </div>
          <div className=" Total__">
            <div className="total__ d-flex">
              <p className="total__right ">Sub Total</p>
              <p>{State.rate * Number(State.quantity)}</p>
            </div>
            <div className="total__ d-flex">
              <p className="total__right">Discount</p>
              <p>50</p>
            </div>
            <div className="total__ d-flex">
              <p className="total__right"> tax</p>
              <p>20</p>
            </div>
            <div className="total__ d-flex">
              <p className="total__right"> Total</p>
              <p>20</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container total">
          <Total />
        </div> */}
    </div>
  );
}

export default Invoice_form;
