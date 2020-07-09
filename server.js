const path = require('path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')


const app = express(),
      DIST_DIR = __dirname,
      HTML_FILE = path.join(DIST_DIR, 'index.html')

mongoose.connect('mongodb://localhost:27017/message-app')
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})

app.use(express.static(DIST_DIR))
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
