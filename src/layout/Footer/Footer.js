import React from "react";

import "./Footer.css";

function Footer(props) {
  // let className = "";

  // const clicked = () => {
  //   if () {
  //     className += " active";
  //   } else {
  //     className += "";
  //   }
  // };

  return (
    <div className="Footer">
      <div className="amount-item">
        <p>{props.amountItem} item left</p>
      </div>
      <div className="select-item">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default Footer;
