module.exports= app =>{
     const solarpanels = require('../controllers/post.controllers')    
     
     var router = require('express').Router();

     //Create a new post 
     router.post("/", solarpanels.create)

     //Retrieve all post
     router.get('/',solarpanels.findAll);
     //update all post
     router.put('/:id',solarpanels.update)
     //delete all post
     router.delete('/:id',solarpanels.delete)

     //Retrieve a published post
     // router.get('/published',solarpanels.findAllPublished)

     app.use("/api/solars", router)





}