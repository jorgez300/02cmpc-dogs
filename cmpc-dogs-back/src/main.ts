import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import './dogs/model/dogs.model';
import { db } from './database/pg.database';

async function main() {
  await db.authenticate();
  await db.sync();
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
main();
