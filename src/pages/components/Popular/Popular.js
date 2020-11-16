import React, { Component } from "react";
import "./Popular.css";
import Order from "../../modals/Order/Order";
import NumberFormat from 'react-number-format'

class Popular extends Component {
  constructor(props){
    super(props);
    this.state = {
      showOrder: false,
      order: null,
      popularOrders: [
        {
          imgUrl:
            "https://res.cloudinary.com/matsxript/image/upload/v1605455058/Rectangle_1_abnjbb.svg",
          title: "Jollof Rice & Beef",
          description:
            "Same as our regular jollof rice but meatier. Perfect for a large party",
          price: 4670,
        },
        {
          imgUrl:
            "https://res.cloudinary.com/matsxript/image/upload/v1605455058/Rectangle_1_1_hoi77l.svg",
          title: "Jollof Rice & Chicken-in-Stew",
          description:
            "Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
          price: 5670,
        },
        {
          imgUrl:
            "https://res.cloudinary.com/matsxript/image/upload/v1605455059/Rectangle_1_2_hzfinr.svg",
          title: "Spaghetti & Barbeque chicken",
          description:
            "Same as our regular Jollof rice but Meatier.  Perfect for a large party.",
          price: 6670,
        },
        {
          imgUrl:
            "https://res.cloudinary.com/matsxript/image/upload/v1605455058/Rectangle_1_1_hoi77l.svg",
          title: "Chinese Rice & Beef",
          description:
            "Same as our regular jollof rice but meatier. Perfect for a large party",
          price: 7670,
        },
      ],
    };
    this.popRef = React.createRef()
  }
  
  
   scroll = (scrollOffset) => {
    if(scrollOffset === 'left'){
     if(this.popRef){
       this.popRef.current.scrollLeft += 200
     } else {
      return null
     }
    } else {
      if(this.popRef){
        this.popRef.current.scrollLeft -= 200
      } else {
       return null
      }
    }
  };
  
  showModal = async (order) => {
    await this.setState({
      showOrder: true,
      order: order,
    });
    console.log(this.state.order);
  };
  cancelModal = () => {
    this.setState({
      showOrder: false,
    });
  };
  render() {
    let Order_render;
    if (this.state.showOrder) {
      Order_render = (
        <div>
          {this.state.order !== null && (
            <Order
              close={this.cancelModal}
              show={this.state.showOrder}
              order={this.state.order}
            />
          )}
        </div>
      );
    }
    return (
      <div className="popular_wrapper">
        {this.props.popular && (
          <div className="title_wrapper">
            <h1 className="title col">What's Popular?</h1>
            <div className="d-flex col-2 swipe">
              <i className="material-icons round" onClick={()=>{this.scroll('right')}}>west</i>
              <i className="material-icons round" onClick={()=>{this.scroll('left')}}>east</i>
            </div>
          </div>
        )}
        {Order_render}
        <section className="pop_orders" ref={this.popRef}>
          {this.state.popularOrders.map((order) => (
            <div className="order" key={order.title}>
              <img src={order.imgUrl} alt={order.title} />
              <h2 className="my-3 order_title">{order.title}</h2>
              <p>{order.description}</p>
              <button
                onClick={() => {
                  this.showModal(order);
                }}
                className="btn order_btn"
              >
                &#x20a6; <NumberFormat className="text-white" value={order.price} displayType={'text'} thousandSeparator={true} prefix={''} />
                <span
                  className="mx-3"
                  style={{
                    color: "#ffffff45",
                  }}
                >
                  |
                </span>{" "}
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Popular;
