const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

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
            'X-RapidAPI-Key': '5fc595e612msh0c5c0a26d28fd1cp1a1a9ejsna02ab6b21bab',
            'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
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

app.get("/help", async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price',
        params: {
            Indices: 'NIFTY 500'
        },
        headers: {
            'X-RapidAPI-Key': '5fc595e612msh0c5c0a26d28fd1cp1a1a9ejsna02ab6b21bab',
            'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
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
            'X-RapidAPI-Key': '5fc595e612msh0c5c0a26d28fd1cp1a1a9ejsna02ab6b21bab',
            'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
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
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7c3d171d287e49969e51e9435c5f8518");
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


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
