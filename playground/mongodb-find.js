// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Error : ', 'Unable to connect to MongoDb Server');
  }
  console.log('Success : ', 'Connection to MongoDb Server Established');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(count);
  // }, (err) => {
  //   if(err){
  //       console.log('Unable to fetch data', err);
  //     }
  // });

  db.collection('Users').find({name: 'Thejus Singh Jagadish'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    if(err){
      console.log('Unable to fetch data', err);
    }
  });


  db.close();
});


// db.collection('Todos').find({completed: true}).toArray().then((docs) => {
//   console.log('Todo');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   if(err){
//     console.log('Unable to fetch data', err);
//   }
// });
