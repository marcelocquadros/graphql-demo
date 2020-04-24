const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://127.0.0.1:27017', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const server = new GraphQLServer({
   typeDefs: path.resolve(__dirname, 'schemas.graphql'),
   resolvers
})

server.start()