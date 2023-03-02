
const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb+srv://channa:channa@cluster0.g3ghjv3.mongodb.net/mockthirteen?retryWrites=true&w=majority')

module.exports = connection ; 