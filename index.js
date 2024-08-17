let { getAllEmployees, getEmployeeById } = require("./controllers/index");
let express = require("express");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(express.json());

// Endpoint: Get all employees
app.get("/employees", async (req, res) => {
  let employees = getAllEmployees();
  res.status(200).json({ employees });
});

app.get("/employees/details/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let employee = getEmployeeById(id);
  res.status(200).json({ employee });
});

module.exports = { app };
