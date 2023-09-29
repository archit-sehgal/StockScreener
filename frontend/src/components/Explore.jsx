import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Explore() {
  const [stockData, setStockData] = useState({});
  const [searchSym, setSearchSym] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/?symbolName=${searchSym.toUpperCase()}`)
      .then((response) => {
        const data = response.data;
        if (data.error) {
          setError("Stock not found");
          setStockData({});
        } else if (Object.keys(data).length === 0) {
          setError("No data available for this stock");
          setStockData({});
        } else {
          setError("");
          setStockData(data);
        }
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        setError("Error fetching stock data. Please try again.");
        setStockData({});
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  const handleInputChange = (e) => {
    setSearchSym(e.target.value);
    setStockData({});
    setError("");
  };

  return (
    <div className="explore flex">
      <div className="searchdivExplore flex">
        <input
          onChange={handleInputChange}
          value={searchSym}
          type="text"
          name="symbolName"
          placeholder="Enter Stock Symbol Name..."
          autoComplete="off"
        />
        <button
          className="searchBtn flex"
          onClick={handleSearch}
          disabled={loading}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {Object.keys(stockData).length > 0 && !error && (
        <div className="outputExploreData flex">
          <div className="symb_img flex">
            <button>
              <Link
                to={`/ss?symbol=${stockData[0].symbol}&identifier=${stockData[0].identifier}`}
              >
                {stockData[0].symbol}
              </Link>
            </button>
          </div>
          <div className="symb_details flex">
            <h1>{stockData[0].identifier}</h1>
            <p>
              <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
              {stockData[0].lastPrice}
            </p>
          </div>
        </div>
      )}
      {loading && !error && <p className="loading_p">Please Wait...</p>}
    </div>
  );
}

export default Explore;
