const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const path = require('path')
const typeDefs = require('./schema')
const models = require('./models') 
const resolvers = require('./resolvers')


const app = express(),
      DIST_DIR = process.cwd() + '/dist',
      HTML_FILE = path.join(`${DIST_DIR}`, 'index.html')

mongoose.connect('mongodb://localhost:27017/message-app')
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})
app.use(express.static(DIST_DIR))

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return models
  }
})
gqlServer.applyMiddleware({ app })

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log(`GQLServer at localhost:${PORT}${gqlServer.graphqlPath}`)
  console.log('Press Ctrl+C to quit.')
})
