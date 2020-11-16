import React, { Component } from 'react';
import './Offers.css'

class Offers extends Component {
    state = { 
        offers:[
            {   
                id: 1,
                imgUrl: "https://res.cloudinary.com/matsxript/image/upload/v1605488077/Rectangle_1_8_treb7p.svg",
                discount: "Get 50% off a scheduled order from Tuesday!"
            },
            {
                id: 2,
                imgUrl: "https://res.cloudinary.com/matsxript/image/upload/v1605488077/Rectangle_1_8_treb7p.svg",
                discount: "Get 50% off a scheduled order from Tuesday!"
            },
            {
                id: 3,
                imgUrl: "https://res.cloudinary.com/matsxript/image/upload/v1605488077/Rectangle_1_8_treb7p.svg",
                discount: "Get 50% off a scheduled order from Tuesday!"
            }
        ]
     }
    render() { 
        return ( 
            <div className="offers_wrapper">
                <h1>Offers</h1>
                {/* map through state */}
                <section className="offers">
                    {this.state.offers.map(offer=>(
                        <div key={offer.id} className="offer">
                            <img src={offer.imgUrl} alt="offers" />
                            <span className="discount_wrapper">{offer.discount}</span>
                        </div>
                    ))}
                </section>
            </div>
         );
    }
}
 
export default Offers;