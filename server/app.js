const express = require('express');
const graphqlHTTP = require('express-graphql');


const app = express();

app.get('/', (req, res, next) => res.send('<h1>Welcome home</h1>'));

app.use('/graphql', graphqlHTTP({
    graphiql: true,
}))


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}.`);
});
