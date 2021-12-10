var express = require('express');
var router = express.Router();
const sequenceGenerator = require('./sequenceGenerator');
const Stronghold = require('../models/stronghold');
const { ConvertActionBindingResult } = require('@angular/compiler/src/compiler_util/expression_converter');

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

  router.post('/', (req, res, next) => {
    const maxStrongholdId = sequenceGenerator.nextId("strongholds");

    const stronghold = new Stronghold({
      id: maxStrongholdId,
      name: req.body.name,
      description: req.body.description,
      website: req.body.website,
      address: req.body.address,
      imageUrl: req.body.imageUrl
    });

    console.log("Inside stronghold router.post");
  console.log(stronghold);

    stronghold.save()
      .then(createdStronghold => {
        res.status(201).json({
          message: 'Stronghold added successfully',
          stronghold: createdStronghold
        })
      })
      .catch(error => {
        res.status(500).json({
          message: 'An error occurred',
          error: error
        });
      });
    });

      router.put('/:id', (req, res, next) => {
        Stronghold.findOne({ id: req.params.id })
          .then(stronghold => {
            stronghold.name = req.body.name,
            stronghold.description = req.body.description,
            stronghold.website = req.body.website,
            stronghold.address = req.body.address,
            stronghold.imageUrl = req.body.imageUrl

            Stronghold.updateOne({ id: req.params.id }, stronghold)
              .then(result => {
                res.status(204).json({
                  message: 'Stronghold updated successfully'
                })
              })
              .catch(error => {
                res.status(500).json({
                  message: 'An error occurred',
                  error: error
                });
              });
          })
          .catch(error => {
            res.status(500).json({
              message: 'Stronghold not found',
              error: { stronghold: 'Stronghold not found' }
            });
        });
      });


      router.delete('/:id', (req, res, next) => {
        Stronghold.findOne({ id: req.params.id })
          .then(stronghold => {
            console.log("Inside stronghold router.post delete function");
            console.log(stronghold);
          
            Stronghold.deleteOne({ id: req.params.id })
              .then(result => {
                res.status(204).json({
                  message: 'Stronghold deleted successfully'
                });
              })
              .catch(error => {
                res.status(500).json({
                  message: 'An error occurred',
                  error: error
                });
              })
          })
          .catch(error => {
            res.status(500).json({
              message: 'Stronghold not found',
              error: { stronghold: 'Stronghold not found' }
            });
          });
      });

module.exports = router; 