const express = require('express')
const cors = require('cors')

const InscriptionRoute = require('./routes/inscriptions')

const PORT = 3001
const app = express();

app.use(cors())
app.use(express.json())


app.use('/api/v1/',InscriptionRoute)






app.listen(PORT,() => console.log('Running On Express on', PORT))
