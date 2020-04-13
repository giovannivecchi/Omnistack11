const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(routes);

app.listen(3333);
