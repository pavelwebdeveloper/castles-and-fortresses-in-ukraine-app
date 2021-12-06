const mongoose = require('mongoose');

const strongholdSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    website: { type: String, required: true },
    contacts: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Stronghold', strongholdSchema);