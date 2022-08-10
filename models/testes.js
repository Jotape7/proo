const { Schema, default: mongoose } = require('mongoose')


const schema = new Schema({ name: String, inventory: {} });
const Character = mongoose.model('Character', schema);

// will store `inventory` field if it is not empty


// will not store `inventory` field if it is empty
async function lord() {
    const frodo = new Character({ name: 'Frodo', inventory: { ringOfPower: 1 } });
    await frodo.save();
    let doc = await Character.findOne({ name: 'Frodo' }).lean();
    doc.inventory; // { ringOfPower: 1 }

    // const sam = new Character({ name: 'Sam', inventory: {} });
    // await sam.save();
    // doc = await Character.findOne({ name: 'Sam' }).lean();
    // doc.inventory; // undefined
};

module.exports = lord();

