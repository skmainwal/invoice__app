import React, { useState, useEffect } from "react";
import "./Description.css";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LinkIcon from "@material-ui/icons/Link";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { useDispatch } from "react-redux";
import {
  Quantity,
  Rate,
  Amount,
  Tax,
  Discount,
  Discription,
} from "../store/action";
import Total from "./Total";
function Description() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [tax, setTax] = useState(null);
  const [discount, setDiscount] = useState("");

  const [discrip, setDiscrip] = useState("");
  const quantityhandler = (e) => {
    setQuantity(e.target.value);
    dispatch(Quantity(e.target.value));
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
    dispatch(Rate(e.target.value));
  };
  const TaxHandler = (e) => {
    setTax(e.target.value);
    dispatch(Tax(e.target.value));
  };
  useEffect(
    (rate) => {
      dispatch(Amount(rate * quantity));
    },
    [rate]
  );

  const Null = 0;
  return (
    <>
      <div className="description d-flex">
        <div className="description__left">
          <p>Description</p>
          <textarea
            className="draft__mid"
            rows="3"
            cols="50"
            placeholder="Add Descrption..."
            value={discrip}
            onChange={(e) => {
              setDiscrip(e.target.value);
              dispatch(Discription(e.target.value));
            }}
          />
          <div>
            <DescriptionIcon className="iconbutton" />
            <DateRangeIcon className="iconbutton" />
            <LinkIcon className="iconbutton" />
            <LocalOfferIcon className="iconbutton" />
          </div>
        </div>

        <div className=" description__right ">
          <div className="d-flex">
            <div className="description__right">
              <p>Quantity</p>
              <input
                type="text"
                placeholder=""
                value={quantity}
                onChange={quantityhandler}
              />
            </div>
            <div className="description__right">
              <p>Rate/Unit</p>
              <input
                type="text"
                placeholder=""
                value={rate}
                onChange={rateHandler}
              />
            </div>
            <div className="description__right">
              <p>Amount</p>
              <input type="text" placeholder="" value={quantity * rate} />
            </div>
            <div className="description__right">
              <p>Tax</p>
              <input type="text" value={tax} onChange={TaxHandler} />
            </div>
          </div>
          <div className="description__right">
            <p>Discount</p>
            <input
              type="text"
              placeholder=""
              value={discount}
              onChange={(e) => {
                setDiscount(e.target.value);
                dispatch(Discount(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <Total total={quantity * rate} tax={tax} discount={discount} />
      </div>
    </>
  );
}

export default Description;
