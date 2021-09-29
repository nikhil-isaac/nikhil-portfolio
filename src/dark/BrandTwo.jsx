import React, { Component } from "react";
import ericsson from "../assets/images/brand/Ericsson-logo.png";
import ibm from "../assets/images/brand/IBM-logo.png";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          Companies that I worked with.
        </p>

        <ul style={{ filter: "invert(1)" }} className="brand-style-2">
          <li>
            <img src={ericsson} alt="Ericsson Logo" />
          </li>
          <li>
            <img src={ibm} alt="IBM Logo" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
