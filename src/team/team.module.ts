import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeveloperService } from '../developer/developer.service';
import { Developer } from '../developer/entities/developer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Developer])],
  controllers: [TeamController],
  providers: [TeamService, DeveloperService]
})
export class TeamModule {}
