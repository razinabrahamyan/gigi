import dbConnection from './db_connection/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import {server_config} from './config/index.js';
import QuestionsSeeder from "./seeders/QuestionsSeeder.js";
import { create , getUser , update , getQueztions  } from './quezControler/quezControler.js';

mongoose.set('strictQuery', false)

dbConnection().then(() => {
    QuestionsSeeder();
});
const app = express();

app.use(cors());
app.use(bodyParser.json());

// create user
app.post('/quizzes', create)

// question update
app.patch('/quizzes/:id' , update )


// get users 
app.get('/quezzes' , getUser)

// get getQueztions 
app.post('/getQueztions' , getQueztions)


//create server
app.listen(server_config.PORT, () => {
})