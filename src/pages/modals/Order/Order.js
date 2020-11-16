import React, { useState } from "react";
import "./Order.css";

function Order(props) {
  const [count, setCount] = useState(1);
  return (
    <div
      className={props.show ? "d-block modal" : "modal d-none"}
      tabindex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* <div className="modal-headx">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" className="material-icons" onClick={props.close}>close</span>
          </button>
        </div> */}
          <div className="modal-body">
            <div className="col-8 p-0 order-des">
              <img
                src="https://res.cloudinary.com/matsxript/image/upload/v1605498045/Rectangle_1_9_xcwyqp.svg"
                alt="order_img"
              />
              <div className="black_order">
                <p className="text-white order_title mt-3">
                  {props.order.title}
                </p>
                <p className="text-white order_descrip mt-3 text-center">
                  {props.order.description}
                </p>
                <div className="price_increment">
                  <p className="text-white order_price">
                    &#x20a6; {props.order.price * count + ".00"}
                  </p>
                  <div>
                    <span className="material-icons order_icons" onClick={()=>{setCount(count - 1)}}>remove</span>
                    <span className="text-white count mx-2">{count}</span>
                    <span className="material-icons order_icons" onClick={()=>{setCount(count + 1)}}>add</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order_confirm">
                <p>We need to confirm the availability of this meal from the Black pepper Annex closest to you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
