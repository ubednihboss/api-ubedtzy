__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Botol LoL',
            namaowner: 'MiKako',
            instagram: 'gamerz_garena',
            youtube : 'https://www.youtube.com/channel/UCx9z-b0cslwd1Oahh4eBD0g'
        }
    }
    res.json(config)
})

module.exports = router
