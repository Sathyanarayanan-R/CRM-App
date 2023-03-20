const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//IMPORT ROUTES

const adminRoute = require("./routes/adminauth/adminauth");
const managerRoute = require("./routes/managerauth/managerauth");
const employeeRoute = require("./routes/employeeauth/employeeauth");
const adminDashboardRoute = require("./routes/adminauth/adminDashboard");
const managerDashboardRoute = require("./routes/managerauth/managerDashboard");
const employeeDashboardRoute = require("./routes/employeeauth/employeeDashboard");

const passwordResetRoutes = require('./routes/passwordReset');

dotenv.config();

const PORT = process.env.PORT || 4050;

//CONNECTION TO DATABASE

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db  ")
);

//MIDDLEWARE
app.use(express.json(), cors());

//ROUTE MIDDLEWARE

app.use("/api/admin", adminRoute);
app.use("/api/manager", managerRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/admindashboard", adminDashboardRoute);
app.use("/api/managerdashboard", managerDashboardRoute);
app.use("/api/employeedashboard", employeeDashboardRoute);

app.use('/api/password-reset', passwordResetRoutes);

app.get("/", (req, res) => {
  res.send(
    `<a href="https://github.com/Sathyanarayanan-R/CRM-App/tree/main/server2">This is a backend app , click to open code</a>`
  );
});
app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));

// "start": "nodemon index.js"
