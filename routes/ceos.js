const express = require('express');
const router = express.Router();

const ceoModel = require('../model/db')

router.get('/:slug?', (req, res) => {
        if (!!req.params.slug) {
            const executive = ceoModel.find(ceo => ceo.slug === req.params.slug);
            res.render('template', {
                locals: {
                    title:'ceo details',
                    ceo: executive
                },
                partials: {
                    body:'partials/ceo-details'
                }
            })

    } else {
        res.render('template', {
            locals: {
                title: 'ceo list',
                data: ceoModel
            },
            partials: {
                body: 'partials/ceo-list'
            }
        });
    }
})

module.exports = router;