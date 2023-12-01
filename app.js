const express = require('express')
//this imports express into the project 
//             require goes out and gets all the info for express and saves it to variable 
const path = require('path')
const app = express()

//specifies a static folder that we can use. 
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/twitter.html'))
})

const tweets = [
    {
        author: "Devan",
        tweet: "Hello everyone! 🤠",
        id: "1",
        likes: "10"
    },
    {
        author: "Garfield",
        tweet: "I hate mondays",
        id: "2",
        likes: "1"
    },
    {
        author: "Pam",
        tweet: "Where's Jim?",
        id: "3",
        likes: "60"
    },
    {
        author: "Bob",
        tweet: "Its snowing outside!",
        id: "4",
        likes: "100"
    },
    {
        author: "Aaron",
        tweet: "is this twitter or x?",
        id: "5",
        likes: "3"
    },
    {
        author: "Walter",
        tweet: "We gotta cook Jesse!",
        id: "6",
        likes: "1"
    }
]

app.get("/author/tweet", (req, res) => { 
res.send(tweets)
})

//         port number
// don't use random numbers 
app.listen(3000)
console.log("Express is running on localhost:3000")
//nodemon restarts the server
//static files - specify where something strictly is 
//if a css file is thrown in there, it doesn't know where to find it because express convolutes everything