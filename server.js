// import { graphql, buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"
// import express from "express"
// import { createHandler } from "graphql-http/lib/use/express"
// import { ruruHTML } from "ruru/server"

// const app = express();

// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello(name:String!): String,
//     age: Int!
//     user:User
//   }
//   type User {
//     id: Int,
//     name: String
//     posts: [Post]
//     friends: [User]
//   }

//   type Post {
//     id:Int,
//     name:String,
//   }
// `)

// const User = new GraphQLObjectType({
//     name: 'User',
//     fields: {
//         id: {
//             type: GraphQLInt,
//         },
//         name: {
//             type: GraphQLString,
//         }
//     }
// })


// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'Query',
//         fields: {
//             hello: {
//                 type: GraphQLString,
//                 resolve: () => {
//                     return "Hello world"
//                 }
//             },
//             user: {
//                 type: User,
//                 resolve: () => {
//                     return {
//                         id: 1,
//                         name: "underscore damm"
//                     }
//                 }
//             }
//         }
//     })
// })

// The rootValue provides a resolver function for each API endpoint
// var rootValue = {
//     hello: (args) => {
//         return "Hello " + args.name;
//     },
//     age: 2,
//     age: () => {
//         return 25;
//     },
//     user: () => {
//         return {
//             id: 1,
//             name: 'underscore dess'
//         }
//     },
// }

// Run the GraphQL query '{ hello }' and print out the response
// graphql({
//     schema,
//     source: "{ hello, age, age }",
//     // source: "{ age }",
//     // source: "{ age }",
//     rootValue
// }).then(response => {
//     console.log(response)
// })

// const PORT = 4000;



// app.all('/', () => 'hello world')
// app.all('/', createHandler({ schema: schema, rootValue: rootValue }))
// app.all('/graphql', createHandler({ schema }))

// app.get('/', (req, res) => {
//     res.type('html')
//     res.end(ruruHTML({ endpoint: '/graphql' }))
// })

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// })

