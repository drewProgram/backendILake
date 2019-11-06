const { Schema, model } = require('mongoose');

// main schema
const ContentSchema = new Schema({
    fileName: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true,
    },
    fileType: {
        type: String,
        require: true
    },
    fileUrl: {
        type: String,
        require: true
    },
  
},  {
    timestamps: true
});

// exportando o model
module.exports = model('Content', ContentSchema);