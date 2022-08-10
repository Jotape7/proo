const { Schema, default: mongoose } = require('mongoose')



const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};


async function run() {
    const Kitten = mongoose.model('Kitten', kittySchema);


    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);


    const fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak(); // "Meow name is fluffy"

    await fluffy.save();
    fluffy.speak();

    const kittens = await Kitten.find();
    console.log(kittens);

    await Kitten.find({ name: /^fluff/ });
}

module.exports = run()

