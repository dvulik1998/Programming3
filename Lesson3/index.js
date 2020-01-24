// let os = require('os')
// let message = 'This platform is '

// function main() {
//     console.log(os.platform())
// }
// main()

let express = require('express')
let app= express()

app.get('/name/:name', function(req, res){
    res.send('<h1>Hello world ' + req.params.name + '</h1>')
})

app.listen(3001, function() {
    console.log('Example is running on port 3000')
})