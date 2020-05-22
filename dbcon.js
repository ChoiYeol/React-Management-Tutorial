

몽구스 쓰기위한거고 실제로 연결도 했지만 몽구스 안쓴다함
const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true}, (err, client) => {
  if(err){
    console.log(err);
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  mongoose.close();
});







/*
      ////////////this is not mongoose///////////////

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
//////ddddddd
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:0814@education-lxzxy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


*/
[
  {
        'id':1,
        'image': 'https://placeimg.com/64/64/any',
        'name':'yeol',
        'birthday':'950814',
        'gender':'man',
        'job':'programer'
  },
  {     'id':2,
        'image': 'https://placeimg.com/64/64/1',
        'name':'bang',
        'birthday':'450814',
        'gender':'girl',
        'job':'programer'
  },
  {     'id':3,
        'image': 'https://placeimg.com/64/64/2',
        'name':'bbi',
        'birthday':'900814',
        'gender':'guy',
        'job':'programer'
  }]
