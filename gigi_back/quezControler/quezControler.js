import QuezModel from '../models/Questions.js'
import Quiz from '../models/Quiz.js'




// get client questions
export const getQueztions = async (req, res) => { 
     try {
          console.log(req.body,'ssssssssssssssssss')
          const posts = await QuezModel.find({role : req.body.role}).sort({order : 1})
         
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