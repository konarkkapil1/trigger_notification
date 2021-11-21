import { TeamService } from '../team/team.service';
import { Module } from '@nestjs/common';
import { TriggerNotificationController } from './trigger-notification.controller';
import { TriggerNotificationService } from './trigger-notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../team/entities/team.entity';
import { Developer } from '../developer/entities/developer.entity';
import { DeveloperService } from '../developer/developer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Developer])],
  controllers: [TriggerNotificationController],
  providers: [TriggerNotificationService, TeamService, DeveloperService]
})
export class TriggerNotificationModule {}
