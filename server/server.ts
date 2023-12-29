require("dotenv").config();
const _port = 8080;
const PORT = process.env.PORT || _port;

// Mongo
import DB_Connection from "./src/config/databaseConnector";
DB_Connection();

const app = require("./src/app");

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
