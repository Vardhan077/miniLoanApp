require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
  {
    origin: ["https://mini-loan-app-inky.vercel.app/","http://localhost:3000","mongodb://localhost:27017/","https://mini-loan-webapp.vercel.app/"],
    methods: ["POST", "GET","PUT","DELETE"],
    credentials: true
  }
));

app.use("/api/user", require("./routes/user"));
app.use("/api/loan", require("./routes/loan"));


app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

app.get('/', (req, res) => {
  res.send('Welcome to Mini-loan-App Server');
});
const dbConnect = require("./config/database");
dbConnect();
