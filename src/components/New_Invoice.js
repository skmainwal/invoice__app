import React from "react";
import "./New_invoice.css";
import Draft from "./Draft";
import Address from "./Address";
import Description from "./Description";
import Total from "./Total";
import { Link } from "react-router-dom";
function New_Invoice() {
  return (
    <div className="container border flex-wrap  ">
      <div className="new_invoice">
        <Link to="/invoice_form">
          <button type="button" class="btn btn-secondary float-right">
            Preview
          </button>
        </Link>

        <Draft />
        <Address />
        <Description />
        {/* <Total /> */}
      </div>
    </div>
  );
}

export default New_Invoice;
