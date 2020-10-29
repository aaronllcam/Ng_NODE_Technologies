const mongoose = require('mongoose');
const {Schema} = mongoose;

const technologySchema = new Schema({ 
    name: String,
    description: String,
    tags: [String],
    logo: String
},
{timestamps: {createdAt: true, updatedAt: true} }
);

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology;
/* const technologySchema = new Schema({ 
    name: {type: String, maxlength: 50},
    description: {type: String},
    tags: [{type: String}],
    logo: {type: String}
},
{timestamps: {createdAt: true, updatedAt: true} }
);

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology; */