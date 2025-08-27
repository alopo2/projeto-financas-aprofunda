import mongoose from 'mongoose'

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('Conectado no MongoDB');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
  }
};

export default connectToMongo;
