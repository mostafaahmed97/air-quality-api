import { app } from './app';
import { config } from './config';

function main() {
  const { port } = config;

  app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
  });
}

main();
