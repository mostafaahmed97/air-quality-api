import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  iqAir: {
    apiKey: process.env.IQAIR_API_KEY,
  },
};

console.log({ config });
