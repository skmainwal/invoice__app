const initialState = {
  company: "",
  client_Add: "",
  quantity: "",
  rate: "",
  amount: "",
  tax: "",
  discount: "",
  invoice_order: "",
  invoice_no: "",
  description: "",
  user: "",
};

export const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };
    case "RATE":
      return {
        ...state,
        rate: action.payload,
      };
    case "TAX":
      return {
        ...state,
        tax: action.payload,
      };
    case "DISCOUNT":
      return {
        ...state,
        discount: action.payload,
      };
    case "COMPANY":
      return {
        ...state,
        company: action.payload,
      };
    case "CLIENT":
      return {
        ...state,
        client_Add: action.payload,
      };
    case "INVOICE_NO":
      return {
        ...state,
        invoice_no: action.payload,
      };
    case "DISCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
