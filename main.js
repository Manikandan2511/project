import express from 'express'


const app = express()
const port=3000;

app.get('/',(req,res) => {

    res.json({msg:"Hello guys!!"});
})

// crud functionality of movies

// to read movies
app.get('/movies', ()=>{
    
})

//to create movies 
app.post('/movies', ()=>{
    
})


//to update movie
app.put('/movies/:id', ()=>{
    
})

// for delete a movie

app.delete('/movies/:id', ()=>{

})

app.listen(port,() => {
    console.log(`This server is running at http://localhost:${port}`);
    
})
