

const development = {
    name : 'development',
    asset_path : './assests',
    session_cookie_key : 'blahsomething',
    db : 'codeial_development',
    smtp : {
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'shi5vi2105',
        pass : 'Sh5maths@2105' 
    }
},
google_client_id : "532998399850-1Furfhe8BFbkEhXn1xcYPr8jYAACNpfV7p.apps.googleusercontent.com",
google_client_secret :"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",
google_call_back_url : "http://localhost:8004/users/auth/google/callback",
jwt_secret : 'codeial',
   

}
const production = {
    name : 'production'
}



module.exports = development;