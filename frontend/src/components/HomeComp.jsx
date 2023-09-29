import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function HomeComp() {
  return (
    <div className="homeComp flex">
      <h1>
        <span >Elevate</span> your
        investment strategy with{" "}
        <span className="spanhome" style={{ backgroundColor: "green" }}>StockUp's</span> powerful stock screening 
        solutions for long-term <span > success</span>
      </h1>
      <p>Providing all NIFTY 500 stocks realtime data</p>
      <button className="btn_home_to_explore"><Link to={"/explore"}>Explore</Link></button>
    </div>
  );
}
export default HomeComp;
