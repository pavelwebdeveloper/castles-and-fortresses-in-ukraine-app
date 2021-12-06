const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    maxStrongholdId: { type: Number, required: true }
});

module.exports = mongoose.model('Sequence', sequenceSchema)