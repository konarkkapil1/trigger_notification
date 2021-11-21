import { IsNotEmpty, IsString, MinLength, MaxLength, IsArray } from "class-validator";


export class UpdateTeamDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'dept name should be atleast 3 characters long' })
    @MaxLength(255, { message: 'dept name should be max 255 characters long' })
    dept_name: string;

    @IsArray()
    developer_ids: [];
}
