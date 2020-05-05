var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var ContentSchema = new Schema({
  uid: String,
  keyword: String,
  seo: [
    { rank: String },
    { title: String },
    { url: String }
  ],
  date: String
});

ContentSchema.methods.setDate = function() {
  this.date = moment.format('YYYY-MM-DD HH:mm:ss');
};

module.exports = mongoose.model('ContentModel', ContentSchema);
