const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema({ name: String }, { timestamps: true });
const User = mongoose.model('User', userSchema);

const doc = new User({ name: 'test' });

async function criar() {
    await doc.save();
}
criar();

console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.244Z