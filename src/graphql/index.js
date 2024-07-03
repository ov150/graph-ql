import { createSchema } from "graphql-yoga";
import { typeDef, queries, userResolver } from "./models/user-model.js"
import _ from "lodash"
const resolvers = {
    Query: {
        hello: () => 'hello from yoga',
    },
}

export const schema = createSchema({
    typeDefs: [queries, typeDef],
    resolvers: _.merge(resolvers, userResolver),
})