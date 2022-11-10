module.exports = mongoose => {
     var schema = mongoose.Schema( // Lets build a virtual schema to define
     {
        image:String,
        title: String,
        price:Number,
        description: String,
        category:String
                 
     },
     {timestamps: true}

     )  
     //Attach to JSON 
     schema.method("toJSON", function() {
                    const { __v, _id, ...object } = this.toObject();
                    object.id = _id;
                    return object;
                  });      
 const Solarpanels = mongoose.model("solarpanels", schema) 
       return Solarpanels;           
                  
}


