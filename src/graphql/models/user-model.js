export const typeDef = `
            type Query {
                user:User
            }

            type Mutation {
                createUser(user: newInputUser):User
            }

            input newInputUser {
                name:String!
                age: Int!
            }

            type User {
                id: Int
                name:String
                age:Int
            }
        `;

export const queries = `
    type Query {
        hello:String
    }
`;


export const userResolver = {
    Query: {
        user: () => {
            return {
                id: 1,
                name: 'underscore'
            }
        }
    },
    Mutation: {
        createUser: (_, { user }) => {
            return {
                id: 1,
                ...user
            }
        }
    },
    User: {
        name: (obj) => {
            return obj.name.trim().toUpperCase()
        }
    }
}
