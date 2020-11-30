import React, { useState } from "react";
import "./Order.css";
import Location from "../../../assets/icons/location.svg";
import NumberFormat from 'react-number-format';

function Order(props) {
  const [count, setCount] = useState(1);
  return (
    <div
      className={props.show ? "d-block modal " : "modal d-none"}
      id="exampleModalScrollable"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle" aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="order-des">
              <img
                src="https://res.cloudinary.com/matsxript/image/upload/v1605498045/Rectangle_1_9_xcwyqp.svg"
                alt="order_img"
              />
              <div className="black_order">
                <p className="text-white order_name mt-3">
                  {props.order.title}
                </p>
                <p className="text-white order_descrip mt-3 text-center">
                  {props.order.description}
                </p>
                <div className="price_increment">
                  <p className="text-white order_price">
                    &#x20a6; <NumberFormat className="text-white" value={ props.order.price * count } displayType={'text'} thousandSeparator={true} prefix={''}  />  
                  </p>
                  <div>
                    <span className="material-icons order_icons" onClick={()=>{setCount(count - 1)}}>remove</span>
                    <span className="text-white count mx-2">{count}</span>
                    <span className="material-icons order_icons" onClick={()=>{setCount(count + 1)}}>add</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order_confirm ">
            <button type="button" className="close-btn">
            <span aria-hidden="true" className="material-icons" onClick={props.close}>close</span>
          </button>
                <p>We need to confirm the availability of this meal from the Black pepper Annex closest to you.</p>
                <section>
                <div className="input_order">
              <span>
                <img className="location" src={Location} alt="location icon" />
              </span>
              <input
                className="input_ord"
                type="text"
                placeholder="Select Closest BlackBells to you"
              />
              <i className="material-icons expand">expand_more</i>
            </div>
            <button className="btn confirm">Confirm</button>
            </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
