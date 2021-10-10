import mongoose from 'mongoose'

const MONGO_DB_URI =
  'mongodb://pevy:PevyGrid2020@localhost:27017/pevy_grid_db?authSource=admin'

  // establish database connection
mongoose
  .connect(MONGO_DB_URI, { serverSelectionTimeoutMS: 6000 })
  .then(() => console.log('MongoDB connection establieshed!'))
  .catch((error: any) => console.log(error.reason));


  export default mongoose;