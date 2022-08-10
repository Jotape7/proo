const { Schema, default: mongoose } = require('mongoose')
const connectToDatabase = require('./database')


connectToDatabase()



// var kitty = require('./kitty.js')

// var populate = require('./models/populate.js')

// var discriminator = require('./models/discriminator.js')

// var time = require('./models/time.js')
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

// const doc = new MyModel();

// doc instanceof MyModel; // true
// doc instanceof mongoose.Model; // true
// doc instanceof mongoose.Document; // true

// doc.name = 'foo';

// Inserindo documentos

// async function saveDoc() {
//     await doc.save();
// }

// saveDoc();

// Deletando usando save

// async function deleteDoc() {
//     const doc = await MyModel.findOne();

//     await MyModel.deleteOne({ _id: doc._id });

//     doc.name = 'foo';
//     await doc.save();

// }

// deleteDoc();


// Alterando o documento usando query
// async function updateDoc(){
//     await MyModel.updateMany({}, { $set: { name: 'foo' } });
// }
// updateDoc();

// VALIDATING

// const schema = new Schema({ name: String, age: { type: Number, min: 0 } });
// const Person = mongoose.model('Person', schema);

// async function validateDoc(){
//     let p = new Person({ name: 'foo', age: 'bar' });
//     // Cast to Number failed for value "bar" at path "age"
//     await p.validate();
// }

// async function validateDoc2(){
//     let p2 = new Person({ name: 'foo', age: -1 });
//     // Path `age` (-1) is less than minimum allowed value (0).
//     await p2.validate();
// }

// validateDoc2();

// Overwriting

// const personSchema = new Schema({
//     name: String,
//   });

//   const _id = '62f155bf261416312dd4ab0c';
//   const Person = mongoose.model('Person', personSchema);


// async function overDoc() {

//     const doc = await Person.findOne({ _id });


//     doc.overwrite({ name: 'Jean-Luc Picard' });
//     await doc.save();
// }

// async function overDoc2() {
//     await Person.replaceOne({ _id }, { name: 'Jean-Luc Picard'});
// }

// overDoc2();




// Path `age` (-1) is
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

// schema.pre('save', function(next) {
//     const err = new Error('something went wrong');
//     // If you call `next()` with an argument, that argument is assumed to be
//     // an error.
//     next(err);
//   });

//   schema.pre('save', function() {
//     // You can also return a promise that rejects
//     return new Promise((resolve, reject) => {
//       reject(new Error('something went wrong'));
//     });
//   });

//   schema.pre('save', function() {
//     // You can also throw a synchronous error
//     throw new Error('something went wrong');
//   });

//   schema.pre('save', async function() {
//     await Promise.resolve();
//     // You can also throw an error in an `async` function
//     throw new Error('something went wrong');
//   });

//   // later...

//   // Changes will not be persisted to MongoDB because a pre hook errored out
//   myDoc.save(function(err) {
//     console.log(err.message); // something went wrong
//   });

// const schema = new mongoose.Schema({ name: String });

// const User = mongoose.model('User', schema);

// schema.pre('save', () => console.log('Hello from pre save'));

// const user = new User({ name: 'test' });
// user.save();






// ---------------------- POPULATE ----------------------------


// Join no mongo é feito com o lookup


// const personSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// const storySchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: 'Person' },
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });

// const Story = mongoose.model('Story', storySchema);
// const Person = mongoose.model('Person', personSchema);


// const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Iam Fleming',
//     age: 50
// });

// author.save(function (err) {
//     if (err) return handleError(err);

//     const story1 = new Story({
//       title: 'Casino Royale',
//       author: '62f3f720bea7dc8b6a25eb06'    // Coloque o _id da pessoa
//     });

//     story1.save(function (err) {
//       if (err) return handleError(err);
//       // that's it!
//     });
//   });

// Agora procurando a pessoa e a story

// Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"
//   });


// Story.
//   findOne({ title: /casino royale/i }).
//   populate('author', 'name'). // only return the Persons name
//   exec(function (err, story) {
//     if (err) return handleError(err);

//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"

//     console.log('The authors age is %s', story.author.age);
//     // prints "The authors age is null"
//   });


// Story.
//   find().
//   populate({ path: 'fans', select: 'name' }).
//   populate({ path: 'fans', select: 'email' });
// // The above is equivalent to:
// Story.find().populate({ path: 'fans', select: 'email' });

// Story.
//   find().
//   populate({
//     path: 'fans',
//     match: { age: { $gte: 21 } },
//     // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
//     select: 'name -_id'
//   }).
//   exec();


// async function teste(){
//     const story = await Story.
//   findOne({ title: 'Casino Royale' }).
//   populate({ path: 'author', name: { $ne: 'Ian Fleming' } }).
//   exec();
// story.author; // `null`
// }
// teste();


// Limit vs DocumentLimit

// const storySchema = Schema({
//     authors: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     title: String
//   });

//   // Later

//   const story = await Story.findOne({ title: 'Casino Royale' }).populate('authors');
//   story.authors; // `[]`


// Story.create([
//     { title: 'Casino Royale', fans: [1, 2, 3, 4, 5, 6, 7, 8] },
//     { title: 'Live and Let Die', fans: [9, 10] }
//   ]);

// async function testeLimit(){
//     const stories = await Story.find().populate({
//         path: 'fans',
//         options: { limit: 2 }
//       });


// }

// let stories = []

// testeLimit();


// stories[0].name; // 'Casino Royale'
// stories[0].fans.length; // 2

// // 2nd story has 0 fans!
// stories[1].name; // 'Live and Let Die'
// stories[1].fans.length;

// console.log(stories[0].name);

// story1.save()

// author.stories.push(story1);
// author.save(callback);

// Person.
//   findOne({ name: 'Ian Fleming' }).
//   populate('stories'). // only works if we pushed refs to children
//   exec(function (err, person) {
//     if (err) return handleError(err);
//     console.log(person);
//   });

//   Story.
//   find({ author: author._id }).
//   exec(function (err, stories) {
//     if (err) return handleError(err);
//     console.log('The stories are an array: ', stories);
//   });

// const userSchema = new Schema({
//     name: String,
//     friends: [{ type: ObjectId, ref: 'User' }]
//   });


// Dynamic References 

// const commentSchema = new Schema({
//     body: { type: String, required: true },
//     doc: {
//       type: Schema.Types.ObjectId,
//       required: true,
//       // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
//       // will look at the `onModel` property to find the right model.
//       refPath: 'docModel'
//     },
//     docModel: {
//       type: String,
//       required: true,
//       enum: ['BlogPost', 'Product']
//     }
//   });

//   const Product = mongoose.model('Product', new Schema({ name: String }));
//   const BlogPost = mongoose.model('BlogPost', new Schema({ title: String }));
//   const Comment = mongoose.model('Comment', commentSchema);

//   async function inserindoFilmes() {
//     const book = await Product.create({ name: 'The Count of Monte Cristo' });
//     const post = await BlogPost.create({ title: 'Top 10 French Novels' });

//     const commentOnBook = await Comment.create({
//         body: 'Great read',
//         doc: book._id,
//         docModel: 'Product'
//       });

//       const commentOnPost = await Comment.create({
//         body: 'Very informative',
//         doc: post._id,
//         docModel: 'BlogPost'
//       });

//       // The below `populate()` works even though one comment references the
//       // 'Product' collection and the other references the 'BlogPost' collection.
//       const comments = await Comment.find().populate('doc').sort({ body: 1 });
//       console.log(comments[0].doc.name); // "The Count of Monte Cristo"
//       console.log(comments[1].doc.title); // "Top 10 French Novels"
//   }

//   inserindoFilmes();



// const commentSchema = new Schema({
//     body: { type: String, required: true },
//     product: {
//         type: Schema.Types.ObjectId,
//         required: true,
//         ref: 'Product'
//     },
//     blogPost: {
//         type: Schema.Types.ObjectId,
//         required: true,
//         ref: 'BlogPost'
//     }
// });


// async function produto() {
//     // The below `populate()` is equivalent to the `refPath` approach, you
//     // just need to make sure you `populate()` both `product` and `blogPost`.
//     const comments = await Comment.find().
//         populate('product').
//         populate('blogPost').
//         sort({ body: 1 });
//     comments[0].product.name; // "The Count of Monte Cristo"
//     comments[1].blogPost.title; // "Top 10 French Novels"
// }

// produto();