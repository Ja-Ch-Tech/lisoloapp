var express = require("express")

var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/app', (req, res) => {
    res.send("Super")
})

module.exports = router;