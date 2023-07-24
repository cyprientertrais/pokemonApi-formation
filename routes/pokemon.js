var express = require('express');
var router = express.Router();
const axios = require('axios');
const apiurl = "https://pokeapi.co/api/v2/";

/* GET users listing. */
router.get('/', async function(req, res, next) {
  return axios.get(apiurl+"pokemon")
  .then( response => response.data)
  .then( response => res.send(response));
  
});

router.get('/:name', async function(req, res, next) {
  return axios.get(apiurl+"pokemon/"+req.params.name)
  .then( response => response.data)
  .then( response => res.send(response))
  .catch( e => res.sendStatus(404))
  
});


module.exports = router;
