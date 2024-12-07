import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

export class CreateFileDto {
    @IsString()
    @Optional()
    nama: string;

    @IsString()
    @Optional()
    keterangan: string;

    @IsNumber()
    id_warga: number;
}
