// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Create an instance of express
const app = express();

// Enable All CORS Requests
app.use(cors());

// Define port
const port = process.env.PORT || 3000;

// Configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define route
app.post("/fetchurl", async (req, res) => {
  // Get the URL from the body of the request
  const url = req.body.url;

  if (!url) {
    return res.status(400).send({ error: "No url provided" });
  }

  // Fetch data from the URL
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.ENRICH_API_KEY}`);

    var raw = JSON.stringify({
      profiles: [
        {
          service: "linkedin",
          url: url,
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    // Send the URL to your API
    fetch("https://api.fullcontact.com/v3/person.enrich", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Send data back to the client
        res.json(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        throw new Error(`HTTP error! status: ${response.status}`);
      });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
