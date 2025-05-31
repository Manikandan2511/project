import express from 'express'


const app = express()
const port=3000;

app.get('/',(req,res) => {

    res.json({msg:"Hello guys!!"});
})

app.listen(port,() => {
    console.log(`This server is running at http://localhost:${port}`);
    
})