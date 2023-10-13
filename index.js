const express=require('express')
const app=new express()


app.post('/',(req,res)=>{
   return res.json({
        message:"kam karo kam"
    })
})

app.listen(3000,()=>{
    console.log('server listening on port 3000');
})