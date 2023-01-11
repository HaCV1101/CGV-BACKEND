const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 3001;
const db = require("./config");
db.connect();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));

route(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port localhost:${PORT}`);
});
