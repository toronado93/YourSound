require("dotenv").config();
const _port = 8080;
const PORT = process.env.PORT || _port;

const app = require("./src/app");

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
