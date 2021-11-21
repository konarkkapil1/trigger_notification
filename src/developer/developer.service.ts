import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Developer } from './entities/developer.entity';
import { Repository } from 'typeorm';
import { UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectRepository(Developer) private readonly developerRepo: Repository<Developer> 
  ) {}

  public async find() {
    return this.developerRepo.find();
  }

  public async create(createDeveloperDto: CreateDeveloperDto) {
    const isDeveloperPresent: Developer = await this.developerRepo.createQueryBuilder()
    .where('email = :email OR mobile = :mobile', {
      email: createDeveloperDto.email,
      mobile: createDeveloperDto.mobile
    }).getOne();
    
    if (isDeveloperPresent) throw new UnprocessableEntityException("User already exists");

    const developer = await this.developerRepo.save(createDeveloperDto);
    
    return developer;
  }
}


