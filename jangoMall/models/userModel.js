var dbprovider = require("./../service/mongodbclient.js")


var demoSchema = dbprovider.Schema;
var userSchema = new demoSchema({
    uid:String,
    title:String,
    content:String,
    createTime:Date
});

exports.userlist =dbprovider.db.model('demos',userSchema)
