import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { db } from './database/pg.database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    db.authenticate();
    return this.appService.getHello();
  }
}
