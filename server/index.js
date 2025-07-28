const express = require("express");
const app = express();
const cors = require("cors");
const dbconnection = require("./db");
const studentRoute = require("./routes/StudentRoute");

app.use(cors());
app.use(express.json());
app.use("/api/student", studentRoute);

dbconnection();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
