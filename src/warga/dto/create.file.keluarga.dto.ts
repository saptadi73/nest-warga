import { Optional } from '@nestjs/common';
import { IsOptional, IsString } from 'class-validator';

export class CreateFileKeluargaDto {
    @IsString()
    @Optional()
    nama: string;

    @IsString()
    @Optional()
    keterangan: string;

    @IsString()
    @IsOptional()
    id_kk: string;
}
