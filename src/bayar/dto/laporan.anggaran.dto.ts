import { IsDateString, IsInt, IsString } from 'class-validator';

export class LaporanAnggaranDto {
    @IsDateString()
    tanggal_awal: string;

    @IsString()
    tanggal_akhir: string;

    @IsInt()
    id_jenis_anggaran: number;

    @IsString()
    type_anggaran: string;
}