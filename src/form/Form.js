import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Company, Client } from "../store/action";

function Form() {
  const { id } = useParams();
  console.log("id", id);
  const history = useHistory();
  const dispatch = useDispatch();
  const [comp_details, setComp_details] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  const OnSubmit = (e) => {
    if (id === "company") {
      dispatch(Company(comp_details));
    } else {
      dispatch(Client(comp_details));
    }

    history.push("/make_invoice");
  };

  return (
    <div className="container border">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            {id === "company" ? (
              <label for="inputEmail4">Company Name</label>
            ) : (
              <label for="inputEmail4">Client Name</label>
            )}

            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder=""
              name="name"
              value={comp_details.name}
              onChange={(e) =>
                setComp_details({
                  ...comp_details,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="inputPassword4"
              value={comp_details.email}
              placeholder=""
              onChange={(e) =>
                setComp_details({
                  ...comp_details,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            name="address"
            value={comp_details.address}
            placeholder=""
            onChange={(e) =>
              setComp_details({
                ...comp_details,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              value={comp_details.city}
              name="city"
              onChange={(e) =>
                setComp_details({
                  ...comp_details,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select
              id="inputState"
              class="form-control"
              name="state"
              value={comp_details.state}
              onChange={(e) =>
                setComp_details({
                  ...comp_details,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option selected>Choose...</option>
              <option>Up</option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={OnSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
