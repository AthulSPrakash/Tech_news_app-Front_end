const app = require('express')()
const cors = require('cors')
const axios = require('axios')

const port = process.env.PORT || 5000
const base = "https://api-tech-news.herokuapp.com"

app.get("/", (req, res) =>{
    axios(`${base}/news/wired`)
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))