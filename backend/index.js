const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
require('dotenv').config(); 

const port = process.env.PORT;
const rapidapi=process.env.rapidapi
const RapidHost=process.env.RapidHost
const newsurl=process.env.newsurl

app.use(cors());

app.get("/", async (req, res) => {
    const symbol = req.query.symbolName;
    const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price',
        params: {
            Indices: 'NIFTY 500',
            Identifier: symbol
        },
        headers: {
            'X-RapidAPI-Key': rapidapi,
            'X-RapidAPI-Host': RapidHost
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.get("/help", async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price',
        params: {
            Indices: 'NIFTY 500'
        },
        headers: {
            'X-RapidAPI-Key': rapidapi,
            'X-RapidAPI-Host': RapidHost
        }
    };

    try {
        const response = await axios.request(options);
        const stockData = response.data.map((stock) => ({
            name: stock.symbol,
            identifier: stock.identifier,
        }));
        res.json(stockData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// single stock details
app.get("/ss", async (req, res) => {
    const symbol = req.query.identifier;

    const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price',
        params: {
            Indices: 'NIFTY 500',
            Identifier: symbol
        },
        headers: {
            'X-RapidAPI-Key': rapidapi,
            'X-RapidAPI-Host': RapidHost
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
});


// news section
app.get("/topten", async (req, res) => {
    try {
        const response = await axios.get(newsurl);
        const articles = response.data.articles;

        const newsData = articles.map((article) => ({
            newsName: article.source.name,
            newsTitle: article.title,
            newsDesc: article.description,
            newsUrl: article.url,
        }));

        res.status(200).json(newsData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
  