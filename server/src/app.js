const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoutes");
const expensesRoute = require("./routes/expenses/expenseRoutes");
const accountStatsRoute = require("./routes/accountStatsRoute/accountStatsRoute");
const app = express();

//env
dotenv.config();
//dbConnect
dbConnect();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome Expenses tracker API v3" });
});
// users routes
app.use("/api/users", userRoute);

//account stats
app.use("/", accountStatsRoute);
//income routes
app.use("/api/income", incomeRoute);
//expenses Route
app.use("/api/expenses", expensesRoute);

//Error
app.use(notFound);
app.use(errorHandler);

//income routes 
//expenses Route

module.exports = app;
