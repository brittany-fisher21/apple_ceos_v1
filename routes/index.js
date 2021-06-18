const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'home page'
        },
        partials: {
            body: 'partials/home'
        }
    })
})

module.exports = router;
