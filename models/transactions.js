const { default: mongoose } = require('mongoose')


//Usando a conexão padrão 
const session = await mongoose.startSession();

// let session = null;
// return Customer.createCollection().
//   then(() => Customer.startSession()).
//   // The `withTransaction()` function's first parameter is a function
//   // that returns a promise.
//   then(_session => {
//     session = _session;
//     return session.withTransaction(() => {
//       return Customer.create([{ name: 'Test' }], { session: session });
//     });
//   }).
//   then(() => Customer.countDocuments()).
//   then(count => assert.strictEqual(count, 1)).
//   then(() => session.endSession());