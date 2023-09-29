import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function TopTen() {
  const [newsdata, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/topten")
      .then((response) => {
        setNewsData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="TopTen flex">
      <div className="refresh">
        <button><Link to={"/topten"}><i class="fa-solid fa-arrows-rotate"></i></Link></button>
      </div>
      <div className="news flex">
        {newsdata.map((n, index) => (
          n.newsDesc && n.newsTitle !== "[Removed]" ? (
            <div className="singleNews flex" key={index}>
              <h1>{n.newsName}</h1>
              <h3>{n.newsTitle}</h3>
              <p>{n.newsDesc.substring(0,100) + "..."}</p>
              {n.newsUrl ? (
                <a href={n.newsUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ) : null}
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default TopTen;
