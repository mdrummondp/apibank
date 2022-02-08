const {join} = require('path')
require('dotenv').config({
    path: join(__dirname, '..', '.env')
})

const app = require('./server')

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Running app on port port. Visit: http://localhost:" + port + "/");
});