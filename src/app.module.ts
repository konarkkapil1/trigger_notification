import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DeveloperModule } from './developer/developer.module';
import { TeamModule } from './team/team.module';
import { TriggerNotificationController } from './trigger-notification/trigger-notification.controller';
import { TriggerNotificationModule } from './trigger-notification/trigger-notification.module';
import typeormConfig from '../config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./environment/${process.env.NODE_ENV}/.env`,
      load: [typeormConfig],
    }),    
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
    }), DeveloperModule, TeamModule, TriggerNotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
