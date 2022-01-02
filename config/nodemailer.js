const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path');




let transporter = nodemailer.createTransport({
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'shi5vi2105',
        pass : 'Sh5maths@2105' 
    },
    tls: {
        rejectUnauthorized: false
    }
});


 let renderTemplate = (data,relativePath) => {
     let mailHTML ;
     ejs.renderFile(
            path.join(__dirname,'../views/mailers',relativePath),
            data,
            function(err,template){
                if(err){console.log('error in rendering template '); return;}

                mailHTML = template;
            }
     )
    return mailHTML;
 }

 module.exports = {
     transporter : transporter,
     renderTemplate : renderTemplate
 }