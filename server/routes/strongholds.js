var express = require('express');
var router = express.Router();
const sequenceGenerator = require('./sequenceGenerator');
const Stronghold = require('../models/stronghold');

router.get('/', (req, res, next) => {
    Stronghold.find()
      .then(strongholds => {
        res.status(200).json({
            message: 'Strongholds fetched successfully!',
            strongholds: strongholds
          });
          console.log("strongholds inside strongholds.js file inside routes folder inside server folder");
          console.log(strongholds);
      })
      .catch(error => {
        res.status(500).json({
          message: 'An error occurred',
          error: error
        });
      });
  });

module.exports = router; 