import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
function NavComp() {
  return (
    <div className="NavComp flex">
      <div className="leftnav flex">
        <button className="btnnav1">
          <Link style={{fontFamily:
          "Alegreya Sans Sc",color:"white",WebkitTextStroke:"1px #2C5549"}} to={"/"}>Stock⬆UP</Link>
        </button>
      </div>
      <div className="centernav flex">
        <Button variant="contained" className="btnnav ">
          <Link to={"/explore"}>Stocks <i class="fa-solid fa-arrow-trend-up"></i></Link>
        </Button>
        <Button variant="contained" className="btnnav">
          <Link to={"/topten"}>Trending  <i class="fa-solid fa-fire"></i></Link>
        </Button>
        <Button variant="contained" className="btnnav ">
          <Link to={"/help"}>Help <i class="fa-solid fa-circle-info"></i></Link>
        </Button>
      </div>
      <div className="rightnav flex">
        <Button variant="outlined" className="btnnav3">
          <a href="https://link.upstox.com/Mqx374opEk4R3Rc97" target="_blank">
            {" "}
            Open Demat Account
          </a>
        </Button>
      </div>
    </div>
  );
}
export default NavComp;
