import Questions from "../models/Questions.js";

export default async function QuestionsSeeder(){
 
    if(!await Questions.find().count()) {
    const questions = [{
        role: ['client', 'lead'],
        text: 'I am reviewing',
        description:'',
        order: 1,
        name: "reviewing",
        type: 'text'
    }, {
        role: ['client'],
        text: 'I am their',
        description:'Client/ Team Member',
        order: 2,
        type: 'text',
        name: "their",
    }, {
        role: ['client', 'lead'],
        text: 'I am very pleased with their work this term',
        order: 3,
        value: 1 , 
        type: 'radio'
    }, {
        role: ['client', 'lead'],
        text: 'They have the technical skills/ knowledge to do their work effectively',
        order: 4,
        value: 2, 
        type: 'radio'
    }, {
        role: ['client', 'lead'],
        text: 'They produce high-quality work',
        order: 5,
        value: 3, 
        type: 'radio',
    }, {
        role: ['client', 'lead'],
        text: 'They do their work in a timely manner',
        order: 6,
        value: 4, 
        type: 'radio'
    }, {
        role: ['client', 'lead'],
        text: 'They are reliable',
        order: 7,
        value: 5, 
        type: 'radio'
    }, {
        role: ['client'],
        text: 'They will ask for information when needed',
        order: 8,
        value: 6, 
        type: 'radio'
    }, {
        role: ['client', 'lead'],
        text: 'They are adept at problem-solving',
        order: 9,
        value: 7, 
        type: 'radio'
    }, {
        role: ['client', 'lead'],
        text: 'They organize and prioritize their time effectively',
        order: 10,
        value: 8, 
        type: 'radio'
    }, {
        role: ['client', 'lead'],
        text: 'They work well with their team(s)',
        order: 11,
        value: 9, 
        type: 'radio'
    }, {
        role: ['lead'],
        text: 'What adversities have they battled this term?',
        order: 12,
        name:"adversities",
        type: 'text'
    }, {
        role: ['lead'],
        text: 'For the next term, I suggest they work on: (2 or 3 actionable things)',
        order: 13,
        name:"suggest",
        type: 'text'
    }, {
        role: ['self'],
        text: 'What adversities have you battled this term?',
        order: 14,
        name:"battled",

        type: 'text'
    }, {
        role: ['self'],
        text: 'For the next term, I have these goals: (2 or 3 actionable things)',
        order: 15,
        name:"goals",
        type: 'text'
    },{
        role: ['client', 'lead','self'],
        text: 'I would like to add: (Include anything that made their work standout or anything they had to overcome.)',
        order: 16,
        name:"like",

        type: 'text'
    },{
        role: ['self'],
        text: 'I am very pleased with my work this term',
        order: 1,
        value: 10, 
        type: 'radio'
    },{
        role: ['self'],
        text: 'I have the technical skills/ knowledge to do their work effectively',
        order: 2,
        value: 11, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I produce high-quality work',
        order: 3,
        value: 12, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I do their work in a timely manner',
        order: 4,
        value: 13, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I am reliable',
        order: 5,
        value: 14, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I ask for help when needed',
        order: 6,
        value: 15, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I am adept at problem-solving',
        order: 7,
        value: 16, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I organize and prioritize my time effectively',
        order: 8,
        value: 17, 

        type: 'radio'
    },{
        role: ['self'],
        text: 'I work well with my team',
        order: 9,
        value: 18, 

        type: 'radio'
    }];
    await Questions.create(questions);
  }
}