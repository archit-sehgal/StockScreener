import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SingleStock() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const symbol = queryParams.get("symbol");
  const identifier = queryParams.get("identifier");
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (symbol) {
        try {
          const response = await axios.get(
            `http://localhost:3000/ss?identifier=${identifier}`
          );
          const data = response.data;
          setStockData(data);
        } catch (error) {
          console.error("Axios Error:", error);
        }
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <div className="SingleStock flex">
      <div className="ssde1">
        <iframe
          src={`https://www.moneycontrol.com/mc/stock/chart?scId=JSP&exchangeId=${symbol}&ex=NSE`}
          scrolling="no"
        ></iframe>
      </div>
      {stockData.map((m) => (
        <div className="ssde2">
          <div className="ssDetails flex">
            <div className="row1ss flex">
              <div className="ssSymbolName flex">
                <h1>{m.symbol}</h1>
              </div>
              <div className="ssidentifier flex">
                <h3>{m.identifier}</h3>
                <p>
                  <i
                    class="fa-solid fa-indian-rupee-sign"
                  ></i>{" "}
                  {m.lastPrice}
                </p>
              </div>
            </div>
            <div className="row2ss flex">
              <p>Open {m.open}</p>
              <p>Day High {m.dayHigh}</p>
              <p>Day Low {m.dayLow}</p>
              <p>Prv. Close {m.previousClose}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleStock;
