import { config } from '../config';
import mongoose from 'mongoose';

export async function initDbConnection() {
  const { db } = config;
  const uri = `mongodb://${db.host}:${db.port}/${db.name}`;

  console.log('Connecting to DB...');
  await mongoose.connect(uri);
  console.log('DB connection established !');
}
