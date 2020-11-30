//************Company Address******************** */
export const Company = (comp) => ({
  type: "COMPANY",
  payload: comp,
});

export const Client = (client) => ({
  type: "CLIENT",
  payload: client,
});

export const Comp_Address = (add) => ({
  type: "COMP_ADDRESS",
  payload: add,
});
export const Comp_Email = (email) => ({
  type: "COMP_EMAIL",
  payload: email,
});

//********************************************************************** */

export const Quantity = (qnt) => ({
  type: "QUANTITY",
  payload: qnt,
});

export const Rate = (rate) => ({
  type: "RATE",
  payload: rate,
});
export const Amount = (amt) => ({
  type: "AMOUNT",
  payload: amt,
});

export const Total_rs = (total) => ({
  type: "TOTAL",
  payload: total,
});

export const Tax = (tax) => ({
  type: "TAX",
  payload: tax,
});

export const Discount = (discount) => ({
  type: "DISCOUNT",
  payload: discount,
});

export const Invoice_No = (no) => ({
  type: "INVOICE_NO",
  payload: no,
});
export const Discription = (dis) => ({
  type: "DISCRIPTION",
  payload: dis,
});

//*****************Google auth user ***************/

export const User = (user) => ({
  type: "USER",
  payload: user,
});
