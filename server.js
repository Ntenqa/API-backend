const express =require ('express'); //Calling the express module
const bodyParser = require('body-parser');
const app = express();
const cors=  require('cors');



app.use (bodyParser.json())
app.use(bodyParser.urlencoded({
      extended:true,              
})
);
const Port=5050
var corsOptions = {
      origin: "http://localhost:8081/"
    };
app.use(cors())

app.get('/',(req,res) =>{
     res.send("Server Online") [{
      extended:true,
     }]             
});
const db = require("./models");
 db.mongoose
   .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
   .then(() => {
     console.log("Connected to the database!");
   })
   .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
   });
//    require('./ROUTES/post.routes')(app);
require('./routes/posts.routes')(app)

app.listen(Port,()=>{
console.log(`Server running on port:${Port} `)

})