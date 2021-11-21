import { Controller, Post, Body, Get } from '@nestjs/common';
import { get } from 'http';
import { DeveloperService } from './developer.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Controller('developer')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @Get()
  get() {
    return this.developerService.find()
  }

  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    try{
      return this.developerService.create(createDeveloperDto);
    } catch(error) {
      return error;
    }
  }

}
