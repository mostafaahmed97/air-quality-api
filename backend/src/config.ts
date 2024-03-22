import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  iqAir: {
    url: process.env.IQAIR_API_URL,
    key: process.env.IQAIR_API_KEY,
  },
};
