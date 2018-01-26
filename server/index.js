const fs = require('fs')

const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')

const port = 3005 

const app = express() 

app.use(cors())
app.use(json())


app.post('/api/fileupload', (req,res,next) => {
    const { body } = req
    console.log('files: ', body);
    if (!body) res.status(500).send()
    // let body = 'this is a test file'
    let filename = 'testpd.pdf'

    fs.writeFile(`${__dirname}/uploads/test/${filename}`, body, (err) => {
        if(err) return console.log(err)
        res.json(body)
    })
})






app.listen(port, () => console.log(`Listening on port: ${port}`))