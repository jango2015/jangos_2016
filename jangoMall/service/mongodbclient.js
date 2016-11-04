/**
 * created by jangocheng at 2016年11月4日
 * 
 * db provider
 * 
 */

var mongoose = require("mongoose")
// mongoose.connect('mongodb://localhost/JangoMp');
//mongoose.createConnection("mongodb://localhost:27017/JangoMp")
var db = mongoose.connect('mongodb://localhost/JangoMp');
exports.Schema = mongoose.Schema;
exports.db = db;