import React, { Component } from "react";
import "./Categories.css";

class Categories extends Component {
  state = {
    categories: [
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605458493/Rectangle_1_4_oi1qsv.svg",
        name: "Breakfast Foods",
      },
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605458492/Rectangle_1_5_qfbmez.svg",
        name: "Fast Foods",
      },
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605458493/Rectangle_1_6_na4e4j.svg",
        name: "Pizzas",
      },
      {
        imgUrl:
          "https://res.cloudinary.com/matsxript/image/upload/v1605458884/Rectangle_1_7_np1qmn.svg",
        name: "Beef Soups",
      },
    ],
  };
  render() {
    return (
      <div className="categories_wrapper">
        <div className="cat_wrapper">
          <h1 className="cats col">Our Categories</h1>
          <button className="all col-2">See All</button>
        </div>
        <section className="category">
            {
                this.state.categories.map(category=>(
                    <div key={category.name} className="each_cat ">
                        <img src={category.imgUrl} alt={category.name} />
                    <span>{category.name}</span>
                    </div>

                ))
            }
        </section>
      </div>
    );
  }
}

export default Categories;
