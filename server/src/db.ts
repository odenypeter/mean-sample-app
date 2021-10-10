import mongoose from 'mongoose'

const MONGO_DB_URI ='mongodb://{username}:{password}@{host}:{port}/{db}?authSource={authentication DB}}'

  // establish database connection
mongoose
  .connect(MONGO_DB_URI, { serverSelectionTimeoutMS: 6000 })
  .then(() => console.log('MongoDB connection establieshed!'))
  .catch((error: any) => console.log(error.reason));


  export default mongoose;