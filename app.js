import express from "express"
import { ruruHTML } from "ruru/server"
import { createYoga } from "graphql-yoga"
import { schema } from "./src/graphql/index.js";
const app = express();



const PORT = 4000;


const yoga = createYoga({
    schema,
})
app.all('/graphql', yoga);


app.get('/', (_req, res) => {
    res.type('html')
    res.end(ruruHTML({ endpoint: '/graphql' }))
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

