import mongoose from "mongoose";

(async () => {
   try {
  await  mongoose.connect('mongodb+srv://mainkupw:mainku@cluster0.mjyonpc.mongodb.net/test')
  console.log("DB connected ");
    
   } catch (error) {
    console.log("ERROR: " , err);
    throw err
    
   }

   app.on("error", (err) =>{
    console.log("ERROR:" , err);
    throw err
   })

   const onListening = () => {
    console.log(`Listening on port ${port}`);
   }
   app.listen(port, onListening)

} )()