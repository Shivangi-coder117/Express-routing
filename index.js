const express=require('express');
const app= express();
const port = 8004;

//use express router
app.use('/',require('./routes/index'));

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error in running: ${err}`);
    }
    console.log(`Server is running on port number : ${port}`);
});

