import { app } from './app';
import { config } from './config';
import { initDbConnection } from './db';
import { scheduleCronJobs } from './cron';

async function main() {
  const { port } = config;

  await initDbConnection();
  // scheduleCronJobs();

  app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
  });
}

main();
