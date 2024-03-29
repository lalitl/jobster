import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>page not found!</h3>
        <Link to="/" className="btn btn-hero" style={{color: "white", textDecoration: "none"}}>
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
