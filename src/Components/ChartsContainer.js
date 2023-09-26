import React, { useState } from "react";
import BarChat from "./BarChart";
import AreaChart from "./AreaChart";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  const [barChat, setBarChat] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        onClick={() => setBarChat(!barChat)}
        className="btn"
        style={{ backgroundColor: "#842029", color: "white" }}
      >
        {barChat ? "Bar Chat" : "Area Chat"}
      </button>
      {barChat ? <BarChat data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
