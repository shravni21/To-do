import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  {signUp,login } from'./controller/UserControler.js'
import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);
Connection();

const PORT = 7000;
app.post('/signup', signUp)
app.post('/login', login)

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));