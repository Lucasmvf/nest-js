import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
@Injectable()
export class RecadosService {
    private lastId = 1;
    private recados: Recado[] = [
        {
            id: 1,
            titulo: 'Olá, Maria! Eu sou o Goku',
            de: 'Goku',
            para: 'Maria',
            lido: false,
            data: new Date('2023-10-01T10:00:00Z'),
        },       
    ];


    getRecados(): string[] {
        return ['Olá, mundo!'];
    }

}
