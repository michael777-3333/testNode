import { Schema, model } from 'mongoose';


// Define el esquema del usuario
const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    state: { type: Number, default: 1 },

}, {
    timestamps: true,
    versionKey: false
});



export default model('User', userSchema);
