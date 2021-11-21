import { IsNotEmpty, IsNotIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class TriggerNotificationDto {
    @IsNotEmpty()
    @IsNumber()
    @IsNotIn([0])
    team_id: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(1024)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(2048)
    content: string;
}