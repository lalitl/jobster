import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../Components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, amet
            itaque rem ducimus consequuntur exercitationem alias nam quia
            consectetur voluptate inventore vero saepe numquam culpa aliquid,
            animi commodi quod temporibus minus eaque ullam{" "}
          </p>
          <Link to='/register' className="btn btn-hero">Login/register</Link>
        </div>
        <img src={main} alt="main img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
