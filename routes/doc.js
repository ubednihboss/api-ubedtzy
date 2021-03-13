__path = process.cwd()

var express = require('express')
var router = express.Router()
var creatorList = ['@Mikako','@Taufik-Kun','@Fico', '@FicoShop']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]
var passapi = 'newapi'

/* GET users listing. */

router.get('/igstalk', (req, res, next) => {
    res.sendFile(__path + '/views/igstalk.html')
})
