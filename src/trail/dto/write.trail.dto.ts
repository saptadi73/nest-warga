import { IsString } from 'class-validator';

export class WriteTrailDto {
    @IsString()
    email: string;

    @IsString()
    activity: string;
}
