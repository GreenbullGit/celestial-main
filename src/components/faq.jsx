import { useState, useEffect } from "react";

export const Faq = (props) => {

  

  return (
    <div id="faq">
      <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-6">
            {" "}
            <div className="pic-box">
              <img src={"img/asset1.png"} className="img-responsive mint-pic" alt="" />{" "}
            </div>
          </div>
          <div className="col-xs-12 col-md-6 about-mid">
            <div className="about-text">
              <h2 className="float-right">F.A.Q</h2>
              <h3>Wen launch sir?</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>How chad is Gurren?</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Wen lambo?</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
