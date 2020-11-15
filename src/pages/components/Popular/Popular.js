import React, { Component } from "react";
import "./Popular.css";

class Popular extends Component {
  state = {
    popularOrders: [
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605455058/Rectangle_1_abnjbb.svg",
        title: "Jollof Rice & Beef",
        description:
          "Same as our regular jollof rice but meatier. Perfect for a large party",
        price: "4,670",
      },
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605455058/Rectangle_1_1_hoi77l.svg",
        title: "Jollof Rice & Chicken-in-Stew",
        description:
          "Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
        price: "5,670",
      },
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605455059/Rectangle_1_2_hzfinr.svg",
        title: "Spaghetti & Barbeque chicken",
        description:
          "Same as our regular jollof rice but meatier. Perfect for a large party",
        price: "6,670",
      },
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605455058/Rectangle_1_1_hoi77l.svg",
        title: "Chinese Rice & Beef",
        description:
          "Same as our regular jollof rice but meatier. Perfect for a large party",
        price: "7,670",
      },
    ],
  };
  render() {
    return (
      <div className="popular_wrapper">
        <div className="title_wrapper">
          <h1 className="title col">What's Popular?</h1>
          <div className="d-flex col-2">
            <i className="material-icons round">west</i>
            <i className="material-icons round">east</i>
          </div>
        </div>
        <section className="pop_orders">
          {this.state.popularOrders.map((order) => (
            <div className="order" key={order.title}>
              <img src={order.imgUrl} alt={order.title} />
              <h2 className="my-3 order_title">{order.title}</h2>
              <p>{order.description}</p>
          <button className="btn order_btn">&#x20a6; {order.price} <span className="mx-3" style={{
              color: "#ffffff45"
          }}>|</span> Add to Cart</button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Popular;
