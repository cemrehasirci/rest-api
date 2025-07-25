const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB bağlantısı başarılı...");
  } catch (error) {
    console.error("MongoDB bağlantı hatası!!!:", error.message);
  }
};

module.exports = db;
