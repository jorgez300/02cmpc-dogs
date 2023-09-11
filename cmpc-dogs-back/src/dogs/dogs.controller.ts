import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('api/dogs')
export class DogsController {
  constructor(private readonly dogService: DogsService) {}

  @Get()
  getAll() {
    return this.dogService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id) {
    return this.dogService.getById(id);
  }

  @Post()
  createDog(@Body() body) {
    return this.dogService.insertOne(body);
  }

  @Delete()
  deleteDog(@Body() body) {
    return this.dogService.DeleteOne(body);
  }

  @Put()
  updateDog(@Body() body) {
    return this.dogService.UpdateOne(body);
  }
}
