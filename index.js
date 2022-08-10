const { Schema, default: mongoose } = require('mongoose')
const connectToDatabase = require('./database')


connectToDatabase()



// var kitty = require('./kitty.js')

// Schema

// Definindo o Schema
// const blogSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });

// Criando o model
// const Blog = mongoose.model('Blog', blogSchema);

// Ids

// const schema = new Schema();

// schema.path('_id'); // ObjectId { ... }

// const Model = mongoose.model('Test', schema);

// const doc = new Model();
// doc._id instanceof mongoose.Types.ObjectId; // true

// Definindo schema
// const animalSchema = new Schema({ name: String, type: String },
//   {
//     // Assign a function to the "methods" object of our animalSchema through schema options.
//     // By following this approach, there is no need to create a separate TS type to define the type of the instance functions.
//     methods: {
//       findSimilarTypes(cb) {
//         return mongoose.model('Animal').find({ type: this.type }, cb);
//       }
//     }
//   });

// // Or, assign a function to the "methods" object of our animalSchema
// animalSchema.methods.findSimilarTypes = function (cb) {
//   return mongoose.model('Animal').find({ type: this.type }, cb);
// };

// //const Animal = mongoose.model('Animal', animalSchema);
// // const dog = new Animal({ type: 'dog' });

// dog.findSimilarTypes((err, dogs) => {
//   console.log(dogs); // woof
// });


//var animal = require('./animal.js')

// Query helper

// define a schema
// const animalSchema = new Schema({ name: String, type: String },
//   {
//     // Assign a function to the "query" object of our animalSchema through schema options.
//     // By following this approach, there is no need to create a separate TS type to define the type of the query functions. 
//     query:{
//       byName(name){
//         return this.where({ name: new RegExp(name, 'i') })
//       }
//     }
//   });

//   // Or, Assign a function to the "query" object of our animalSchema
//   animalSchema.query.byName = function(name) {
//     return this.where({ name: new RegExp(name, 'i') })
//   };

//   const Animal = mongoose.model('Animal', animalSchema);

//   Animal.find().byName('fido').exec((err, animals) => {
//     console.log(animals);
//   });

//   Animal.findOne().byName('fido').exec((err, animal) => {
//     console.log(animal);
//   });

// INDEXES

// const animalSchema = new Schema({
//   name: String,
//   type: String,
//   tags: { type: [String], index: true } // path level
// });

// animalSchema.index({ name: 1, type: -1 }); // schema level

// VIRTUALS

// const personSchema = new Schema({
//   name: {
//     first: String,
//     last: String
//   }
// },{
//   virtuals:{
//     fullName:{
//       get() {
//         return this.name.first + ' ' + this.name.last;
//       }
//     }
//   }
// });

// // Or by using the virtual method as following:  
// personSchema.virtual('fullName').get(function() {
//   return this.name.first + ' ' + this.name.last;
// });



// // Again that can be done either by adding it to schema options:
// const personSchema = new Schema({
//   name: {
//     first: String,
//     last: String
//   }
// },{
//   virtuals:{
//     fullName:{
//       get() {
//         return this.name.first + ' ' + this.name.last;
//       },
//       set(v) {
//         this.name.first = v.substr(0, v.indexOf(' '));
//         this.name.last = v.substr(v.indexOf(' ') + 1);
//       }
//     }
//   }
// });

// // Or by using the virtual method as following:
// personSchema.virtual('fullName').
//   get(function() {
//     return this.name.first + ' ' + this.name.last;
//     }).
//   set(function(v) {
//     this.name.first = v.substr(0, v.indexOf(' '));
//     this.name.last = v.substr(v.indexOf(' ') + 1);
//   });





// // compile our model
// const Person = mongoose.model('Person', personSchema);

// // create a document
// const axl = new Person({
//   name: { first: 'Axl', last: 'Rose' }
// });

// axl.fullName = 'William Rose';

// console.log(axl.fullName); 





// ALIASES

// const personSchema = new Schema({
//   n: {
//     type: String,
//     // Now accessing `name` will get you the value of `n`, and setting `name` will set the value of `n`
//     alias: 'name'
//   }
// });

// const Person = mongoose.model('Person', personSchema);


// // Setting `name` will propagate to `n`
// const person = new Person({ name: 'Val' });
// console.log(person); // { n: 'Val' }
// console.log(person.toObject({ virtuals: true })); // { n: 'Val', name: 'Val' }
// console.log(person.name); // "Val"

// person.name = 'Not Val';
// console.log(person); // { n: 'Not Val' }


// const childSchema = new Schema({
//   n: {
//     type: String,
//     alias: 'name'
//   }
// }, { _id: false });

// const parentSchema = new Schema({
//   // If in a child schema, alias doesn't need to include the full nested path
//   c: childSchema,
//   name: {
//     f: {
//       type: String,
//       // Alias needs to include the full nested path if declared inline
//       alias: 'name.first'
//     }
//   }
// });



// OPTIONS

// autoIndex


// const schema = new Schema({..}, { autoIndex: false });
// const Clock = mongoose.model('Clock', schema);
// Clock.ensureIndexes(callback);

// autoCreate

// const Pessoa = new Schema({ name: String }, {
//   autoCreate: false,
//   capped: { size: 1024 }
// });
// const Test = mongoose.model('Test', Pessoa);

// // No-op if collection already exists, even if the collection is not capped.
// // This means that `capped` won't be applied if the 'tests' collection already exists.
// await Test.createCollection();


// MINIMIZE

// const schema = new Schema({ name: String, inventory: {} });
// const Character = mongoose.model('Character', schema);

// // will store `inventory` field if it is not empty
// const frodo = new Character({ name: 'Frodo', inventory: { ringOfPower: 1 }});
// await frodo.save();
// let doc = await Character.findOne({ name: 'Frodo' }).lean();
// doc.inventory; // { ringOfPower: 1 }

// // will not store `inventory` field if it is empty
// const sam = new Character({ name: 'Sam', inventory: {}});
// await sam.save();
// doc = await Character.findOne({ name: 'Sam' }).lean();
// doc.inventory; // undefined

// var lord = require('./testes.js')



// ES6 classes

// class MyClass {
//   myMethod() { return 42; }
//   static myStatic() { return 42; }
//   get myVirtual() { return 42; }
// }

// const schema = new mongoose.Schema();
// schema.loadClass(MyClass);

// console.log(schema.methods); // { myMethod: [Function: myMethod] }
// console.log(schema.statics); // { myStatic: [Function: myStatic] }
// console.log(schema.virtuals); // { myVirtual: VirtualType { ... } }


// SCHEMA TYPE

// 

// const Assignment = mongoose.model('Assignment', { dueDate: Date });
// Assignment.findOne(function (err, doc) {
//   doc.dueDate.setMonth(3);
//   doc.save(callback); // THIS DOES NOT SAVE YOUR CHANGE

//   doc.markModified('dueDate');
//   doc.save(callback); // works
// })

// BOOLEAN

// const M = mongoose.model('Test', new Schema({ b: Boolean }));
// console.log(new M({ b: 'nay' }).b); // undefined

// // Set { false, 'false', 0, '0', 'no' }
// console.log(mongoose.Schema.Types.Boolean.convertToFalse);

// mongoose.Schema.Types.Boolean.convertToFalse.add('nay');
// console.log(new M({ b: 'nay' }).b); // false

// const ToySchema = new Schema({ name: String });
// const ToyBoxSchema = new Schema({
//   toys: [ToySchema],
//   buffers: [Buffer],
//   strings: [String],
//   numbers: [Number]
//   // ... etc
// });

// const ToyBox = mongoose.model('ToyBox', ToyBoxSchema);
// console.log((new ToyBox()).toys); // []

// CONNECTION

// const MyModel = mongoose.model('Test', new Schema({ name: String }));
// // Works
// MyModel.findOne(function(error, result) { /* ... */ });

// Model

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema);

// const small = new Tank({ size: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

// // ou

// Tank.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });

// // ou para inserir varios documentos
// Tank.insertMany([{ size: 'small' }], function(err) {

// });


// Query

// Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);

// Deletando apenas um documento

// Tank.deleteOne({ size: 'small' }, function (err) {
//   if (err) return handleError(err);
//   // deleted at most one tank document
// });

// Update - atualizando um documento

// Tank.updateOne({ size: 'small' }, { name: 'T-90' }, function(err, res) {
//   // Updated at most one doc, `res.nModified` contains the number
//   // of docs that MongoDB updated
// });

// Change Streams

// async function run() {
//   // Create a new mongoose model
//   const personSchema = new mongoose.Schema({
//     name: String
//   });
//   const Person = mongoose.model('Person', personSchema);

//   // Create a change stream. The 'change' event gets emitted when there's a
//   // change in the database
//   Person.watch().
//     on('change', data => console.log(new Date(), data));

//   // Insert a doc, will trigger the change stream handler above
//   console.log(new Date(), 'Inserting doc');
//   await Person.create({ name: 'Axl Rose' });
// }


// const MyModel = mongoose.model('Test', new Schema({ name: String }));


// doc instanceof MyModel; // true
// doc instanceof mongoose.Model; // true
// doc instanceof mongoose.Document; // true

// const doc = await MyModel.findOne();

// doc instanceof MyModel; // true
// doc instanceof mongoose.Model; // true
// doc instanceof mongoose.Document; // true

// SUBDOCUMENTS

// Below code will print out 1-4 in order
// const childSchema = new mongoose.Schema({ name: 'string' });

// childSchema.pre('validate', function(next) {
//   console.log('2');
//   next();
// });

// childSchema.pre('save', function(next) {
//   console.log('3');
//   next();
// });

// const parentSchema = new mongoose.Schema({
//   child: childSchema
// });

// parentSchema.pre('validate', function(next) {
//   console.log('1');
//   next();
// });

// parentSchema.pre('save', function(next) {
//   console.log('4');
//   next();
// });

// const subdocumentSchema = new mongoose.Schema({
//   child: new mongoose.Schema({
//     name: String,
//     age: {
//       type: Number,
//       default: 0
//     }
//   })
// });
// const Subdoc = mongoose.model('Subdoc', subdocumentSchema);

// // Note that the `age` default has no effect, because `child`
// // is `undefined`.
// const doc = new Subdoc();
// doc.child; // undefined

//const doc = parent.children.id(_id)
 

// const Parent = mongoose.model('Parent');
// const parent = new Parent();

// // create a comment
// parent.children.push({ name: 'Liesl' });
// const subdoc = parent.children[0];
// console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
// subdoc.isNew; // true

// parent.save(function (err) {
//   if (err) return handleError(err)
//   console.log('Success!');
// });

// Adicionando subdocument usando .create()

// const newdoc = parent.children.create({ name: 'Aaron' });

// Query

// Executing 

// const Person = mongoose.model('Person', yourSchema);

// // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host".
//   console.log('%s %s is a %s.', person.name.first, person.name.last,
//     person.occupation);
// });

// const schema = new Schema({
//   name: {
//     type: String,
//     required: true
//   }
// });
// const Cat = db.model('Cat', schema);

// // This cat has no name :(
// const cat = new Cat();

// let error;
// try {
//   await cat.save();
// } catch (err) {
//   error = err;
// }
    

// const breakfastSchema = new Schema({
//   eggs: {
//     type: Number,
//     min: [6, 'Too few eggs'],
//     max: 12
//   },
//   bacon: {
//     type: Number,
//     required: [true, 'Why no bacon?']
//   },
//   drink: {
//     type: String,
//     enum: ['Coffee', 'Tea'],
//     required: function() {
//       return this.bacon > 3;
//     }
//   }
// });
// const Breakfast = db.model('Breakfast', breakfastSchema);

// const badBreakfast = new Breakfast({
//   eggs: 2,
//   bacon: 0,
//   drink: 'Milk'
// });
// let error = badBreakfast.validateSync();
// assert.equal(error.errors['eggs'].message,
//   'Too few eggs');
// assert.ok(!error.errors['bacon']);
// assert.equal(error.errors['drink'].message,
//   '`Milk` is not a valid enum value for path `drink`.');

// badBreakfast.bacon = 5;
// badBreakfast.drink = null;

// error = badBreakfast.validateSync();
// assert.equal(error.errors['drink'].message, 'Path `drink` is required.');

// badBreakfast.bacon = null;
// error = badBreakfast.validateSync();
// assert.equal(error.errors['bacon'].message, 'Why no bacon?');

// const schema = new Schema(..);
// schema.pre('save', function(next) {
//   if (foo()) {
//     console.log('calling next!');
//     // `return next();` will make sure the rest of this function doesn't run
//     /*return*/ next();
//   }
//   // Unless you comment out the `return` above, 'after next' will print
//   console.log('after next');
// });