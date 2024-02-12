require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT;

app.get('/', (_request, response) => response.json("Running " + PORT));

app.listen(PORT, () => console.log("API running on " + PORT));
