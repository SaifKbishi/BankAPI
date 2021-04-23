const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://firstUser:FG12XZ123@cluster0.y3jty.mongodb.net/Bank?retryWrites=true&w=majority',{
//mongoose.connect('mongodb://127.0.0.1:27017/Bank',{
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true, 
});
