import { TeamService } from '../team/team.service';
import { Injectable } from '@nestjs/common';
import { TriggerNotificationDto } from './dto/trigger-notification.dto';
import { v4 as uuid } from 'uuid';
import e from 'express';

@Injectable()
export class TriggerNotificationService {
    constructor(
        private readonly teamService: TeamService
    ){}
    
    public async trigger(notificationData: TriggerNotificationDto) {
        const developers: [] = await this.teamService.getTeam(notificationData.team_id);
        const mobiles = [];
        const emails = [];
        developers.forEach(developer => {
            mobiles.push(developer['mobile'])
            emails.push(developer['email'])
        })

        const sms = {
            id: uuid(),
            mobiles: mobiles,
            content: notificationData.content,
            sent_at: Date.now()
        };
        const email = {
            id: uuid(),
            emails: emails,
            content: notificationData.content,
            sent_at: Date.now()
        }
        return {team_id: notificationData.team_id, sms, email};
    }   


}
