const { Schema, default: mongoose } = require('mongoose')

// const AuthorSchema = new Schema({
//     name: String,
//     posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }]
//   });

//   const BlogPostSchema = new Schema({
//     title: String,
//     comments: [{
//       author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
//       content: String
//     }]
//   });

//   const Author = mongoose.model('Author', AuthorSchema, 'Author');
//   const BlogPost = mongoose.model('BlogPost', BlogPostSchema, 'BlogPost');


const PersonSchema = new Schema({
    name: String,
    band: String
});

// const BandSchema = new Schema({
//     name: String
// });

// Later
// BandSchema.virtual('numMembers', {
//     ref: 'Person', // The model to use
//     localField: 'name', // Find people where `localField`
//     foreignField: 'band', // is equal to `foreignField`
//     count: true // And only get the number of docs
// });

// const Band = mongoose.model('Band', BandSchema)

// async function conte() {

//     const doc = await Band.findOne({ name: 'Motley Crue' }).
//         populate('numMembers');
//     console.log(doc.numMembers); // 2
// }

// conte();

const BandSchema = new Schema({
    name: String,
    members: {
      type: Map,
      of: {
        type: 'ObjectId',
        ref: 'Person'
      }
    }
  });
  const Band = mongoose.model('Band', BandSchema);

  const Person = mongoose.model('Person', PersonSchema);

  const person1 = new Person({ name: 'Vince Neil' });
  const person2 = new Person({ name: 'Mick Mars' });

  async function salvar(){
    person1.save();
    person2.save();
  }

//   salvar();

  const band = new Band({
    name: 'Motley Crue',
    members: {
      'singer': '62f40ba1f0c8e81f50a005a7',
      'guitarist': '62f40ba1f0c8e81f50a005a6'
    }
  });


  async function salvarBanda() {
    band.save();
  }

  salvarBanda();
