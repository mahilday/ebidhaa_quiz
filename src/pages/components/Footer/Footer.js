import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer_wrapper">
        <section className="footer_writeup">
          <div className="top_text">
            <h2 className="text-white bpe">Blackpeppereats</h2>
            <span className="store_wrapper">
              <div className="footer_store">
                <div className="footer_circle ml-3"></div>
                <p className="col-8">
                  Get on the <span className="bigger">Appstore</span>
                </p>
              </div>
              <div className="footer_store">
                <div className="footer_circle ml-3"></div>
                <p className="col-8">
                  Get on the <span className="bigger">Playstore</span>
                </p>
              </div>
            </span>
          </div>
          <div className="bottom_text">
            <p className="text-white">&copy; 2020 Blackpepper</p>
            <ul className="footer_nav">
              <li>
                <a href="https://www.google.com">Legals</a>
              </li>
              <li>
                <a href="https://www.google.com">Legals</a>
              </li>
              <li>
                <a href="https://www.google.com">Legals</a>
              </li>
            </ul>
            <ul className="footer_icons">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
              <li>
                <i className="fa fa-youtube-play"></i>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
