import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  iqAir: {
    url: process.env.IQAIR_API_URL,
    key: process.env.IQAIR_API_KEY,
  },
  db: {
    port: process.env.DB_PORT || 0,
    host: process.env.DB_HOST || '',
    name: process.env.DB_NAME || '',
  },
};
