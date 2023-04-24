const mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/db_mean';
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbURI);

  var kittySchema = new mongoose.Schema({
    name: String
  });
  
  var Kitten = mongoose.model('Kitten', kittySchema);
  
  const silence = new Kitten({ name: 'Silence' });

  await silence.save();

  console.log(silence.name); // 'Silence'
  
  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };
  
  //const 
  Kitten = mongoose.model('Kitten', kittySchema);
  
  const fluffy = new Kitten({ name: 'fluffy' });
  //fluffy.speak(); // "Meow name is fluffy"
  
  
  await fluffy.save();
  //fluffy.speak();
  
  const kittens = await Kitten.find();
  console.log(kittens);
  
  await Kitten.find({ name: /^fluff/ });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Configuracion de los eventos de la conexión Mongoose
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
  // Si el proceso 'Node’ termina, se cierra la conexión Mongoose
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});  