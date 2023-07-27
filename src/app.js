import express from "express";

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/instagram',(req ,res) =>{
    res.send('you have visted on instagram')

  } )
  app.get('/math' , (req, res) => {
    res.send('<h1> <i style= "color:blue;"> your are enter into btech so please focuse on solve complex maths problems </i> </h1>')
  })

export default app;