const router = require('express').Router()
//model data variables are typically capital
const Bread = require('../models/bread')

//GET all bread
router.get('/', (req, res) => {
  res.render('index', {
    breads: Bread
  })
})

//GET specific bread
router.get('/:index', (req, res) => {
  const { index } = req.params
  res.send(Bread[index])
})

module.exports = router