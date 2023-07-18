const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { format, sub } = require("date-fns");

const app = express();
const port = 3001;

app.use(cors());

const nasaAxios = axios.create({
  baseURL: "https://api.nasa.gov"
});

app.get("/apod", (req, res) => {
  try {
    const today = format(new Date(), "yyyy-MM-dd");
    const oneWeekAgo = format(sub(new Date(), { weeks: 1 }), "yyyy-MM-dd");
    const state = nasaAxios
      .get("/planetary/apod", {
        params: {
          api_key: "Vr2aoFhMt1Qv3F05lm3Lxka0FImNtWghvO5YTazv",
          start_date: oneWeekAgo,
          end_date: today
        }
      })
      .then(response => {
        console.log(res);
        res.json(response.data);
      })
      .catch(error => console.error(error));
  } catch (error) {
    console.error(error, "apod error");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
