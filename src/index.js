const express = require('express')

const InscriptionRoute = require('./routes/inscriptions')

const PORT = 3001
const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use('/api/v1/',InscriptionRoute)






app.listen(PORT,() => console.log('Running On Express on', PORT))
