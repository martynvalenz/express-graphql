import dotenv from 'dotenv';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
import {connect} from './database';

dotenv.config();
const app = express();
connect();

app.get('/', (req, res) => {
  res.json({message:'Hello World!'})
});

app.use('/graphql', graphqlHTTP({
  graphiql:process.env.GRAPHIQL || false,
  schema,
  context: {
    messageId: 'test'
  }
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port} ⚡️`);
})