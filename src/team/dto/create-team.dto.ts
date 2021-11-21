import { CreateDeveloperDto } from '../../developer/dto/create-developer.dto';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsArray, IsOptional } from 'class-validator';

export class CreateTeamDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'name should be atleast 3 characters long' })
    @MaxLength(255, { message: 'name should be max 255 characters long' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'dept name should be atleast 3 characters long' })
    @MaxLength(255, { message: 'dept name should be max 255 characters long' })
    dept_name: string;

    @IsArray()
    developer_ids: [];

    @IsArray()
    @IsOptional()
    developer?: CreateDeveloperDto[];
}
