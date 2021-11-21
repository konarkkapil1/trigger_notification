import { Controller, Post, Body } from '@nestjs/common';
import { TriggerNotificationDto } from './dto/trigger-notification.dto';
import { TriggerNotificationService } from './trigger-notification.service';

@Controller('trigger_notification')
export class TriggerNotificationController {
    constructor(
        private readonly triggerNotificationService: TriggerNotificationService
    ){}
    
    @Post()
    public triggerNotification(@Body() data: TriggerNotificationDto) {
        try{
            return this.triggerNotificationService.trigger(data);
        } catch(error) {
            return error;
        }
    }
}
