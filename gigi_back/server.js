import dbConnection from './db_connection/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import {server_config} from './config/index.js';
import Quiz from "./models/Quiz.js";
import QuestionsSeeder from "./seeders/QuestionsSeeder.js";
import { getAll , create , getUser , update , getClientQueztions  , getLeadQueztions , getSelfQueztions} from './quezControler/quezControler.js';

mongoose.set('strictQuery', false)

dbConnection().then(() => {
    console.log('db connected');
    QuestionsSeeder();
});
const app = express();

app.use(cors());
app.use(bodyParser.json());

// create user
app.post('/quizzes', create)

// question update
app.patch('/quizzes/:id' , update )

// get questions All
app.get('/questions', getAll)

// get users 
app.get('/quezzes' , getUser)

// get questionsClient 
app.get('/getClientQueztions' , getClientQueztions)

//get questions Lead
app.get('/getLeadQueztions' , getLeadQueztions)
//get questions self
app.get('/getSelfQueztions' , getSelfQueztions)

//create server
app.listen(server_config.PORT, () => {
    console.log(`Example app listening on port ${server_config.PORT}`)
})