// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Error : ', 'Unable to connect to MongoDb Server');
  }
  console.log('Success : ', 'Connection to MongoDb Server Established');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   _id: 123,
  //   name: 'Sanath',
  //   age: 26,
  //   location: 'Santa Clara'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert User');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.close();
});
