require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT;
const SERVER_INDEX = "main"

app.get(`/${SERVER_INDEX}`, (_request, response) => response.json("Vincenzo F. Di Giacomo API"));

app.listen(PORT, () => console.log("API running on " + PORT));