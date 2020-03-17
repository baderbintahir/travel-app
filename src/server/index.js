const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config();

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Travel app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send('mockAPIResponse')
})

app.post('/api/darksky', async function(req, res){

    fetch(req.body.darkSky_endpoint)
    .then(res => res.json())
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => res.status(500).json({ error }))

})






//To be changed according to the API responses
// app.post('/api/sentiment', function(req, res){

//     console.log(req.body);
//     textapi.sentiment({
//         text: req.body.articleText
//       }, function(error, response) {
//         if(error){
//             return res.status(500).json({ error });
    
//         } 
//         res.status(200).json({result: response});
//         console.log(response)
//     });
// })