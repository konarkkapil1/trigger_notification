import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, IsMobilePhone } from 'class-validator';

export class CreateDeveloperDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'firstname should be atleast 3 characters long' })
    @MaxLength(255, { message: 'firstName should be max 255 characters long' })
    full_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7, { message: 'email should be atleast 7 characters long' })
    @MaxLength(320, { message: 'email should be max 320 characters long' })
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10, { message: 'phone should be atleast 10 characters long' })
    @MaxLength(10, { message: 'phone should be max 10 characters long' })
    @IsMobilePhone()
    mobile: string
}
