import React from "react";
import "./Invoice.css";
import SidebarOption from "./SidebarOption";
function Invoice() {
  return (
    <div className="invoice">
      <div className="invoice_sidebar">
        <h2>User Name</h2>
        <img src="" alt="Invoicely" />
        <SidebarOption className="invoive__sidebar" />
        <div></div>
      </div>
    </div>
  );
}

export default Invoice;
