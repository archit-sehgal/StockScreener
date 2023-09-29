import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Help() {
  const [symbolData, setSymbolData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/help")
      .then((response) => {
        setSymbolData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="helpdata flex">
        <h1>To search for any company's stock use the identifier mentioned below</h1>
      <div className="helpdatafetched">
        {symbolData.map((item, index) => (
          <div className="singlehelpdata " key={index}>
            <p>Name: {item.name}</p>
            <p>Identifier: {item.identifier}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
