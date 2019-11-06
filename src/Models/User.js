const { Schema, model } = require('mongoose');

const JobSchema = new Schema({
    name: {
        type: String
    }

},  {
    timestamps: true
});

const AdressSchema = new Schema({
    country: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    zip_code: {
        type: Number,
        require: true
    }
});

// main schema
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    user_type: {
        type: String,
        require: true
    },
  //  company: CompanySchema,
   // job: JobSchema,
    //adress: AdressSchema

},  {
    timestamps: true
});

// exportando o model
module.exports = model('User', UserSchema);