import QuezModel from '../models/Questions.js'
import Quiz from '../models/Quiz.js'


// Get All questions

export const getAll = async (req, res) => {
    try {
         const posts = await QuezModel.find()
         res.json(posts)

    } catch (err) {
        
         res.status(500).json({
              message: 'you have not create state'
         })

    }
}


// get client questions
export const getClientQueztions = async (req, res) => {
     try {
          const posts = await QuezModel.find({role : "client"})
         
          res.json(posts)
 
     } catch (err) {
          console.log(err)
          res.status(500).json({
               message: 'you have not create state'
          })
 
     }
 }

 // get lead questions
 export const getLeadQueztions = async (req, res) => {
     try {
          const posts = await QuezModel.find({role:"lead"})
          res.json(posts)
     } catch (err) {
          console.log(err)
          res.status(500).json({
               message: 'you have not create state'
          })
     }
 }

 
 // get lead self
 export const getSelfQueztions = async (req, res) => {
     try {
          const posts = await QuezModel.find({role:"self"})
       
          res.json(posts)
 
     } catch (err) {
          console.log(err)
          res.status(500).json({
               message: 'you have not create state'
          })
 
     }
 }

// Create User

export const create = async (req, res) => {
   
    try {
         const quiz = new Quiz({
             username: req.body.username,
             role: req.body.role,
         })
          let post = await quiz.save()
          console.log(post,"post")

        return res.json(quiz);
    } catch (err) {
         console.log(err)
         res.status(500).json({
              massage: 'you have not create state'
         })

    }

}

// user question 

export const update = async (req , res) => {
     console.log(req.body)
     try{
          const postsId = req.params.id
          
          await Quiz.updateOne({
               _id: postsId
          },
          { 
             username: req.body.username,
             questions: req.body
          })
 
          res.json({
                success: true
          })
 
     }catch(err){
          console.log(err)
          res.status(500).json({
               massage: 'you have not update'
          })
     }
 }


// Get Users
export const getUser = async (req, res) => {
    

     try {
          const postsId = req.body.id
          const posts = await Quiz.findOne({username : req.query.username})
          res.json(posts)
 
     } catch (err) {
          console.log(err)
          res.status(500).json({
               message: 'you have not create state'
          })
 
     }
 }