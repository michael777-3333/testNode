import 'dotenv/config'
import mongoose from 'mongoose';

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

async function connection() {
    await mongoose.connect(URI)
    .then(() => { console.log('Db is connected!'); })
    .catch(error => console.log(error));
}

export { connection }