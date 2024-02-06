const express = require('express')
const cors = require('cors');
const routes = require('./api/router');
const app = express()
const port = 3000

app.use(cors());
 // Habilita CORS
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
