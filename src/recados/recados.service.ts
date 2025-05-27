import { Delete, Injectable, NotFoundException, Param, Patch } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
    private lastId = 1;
    private recados: Recado[] = [
        {
            id: 1,
            texto: 'Olá, Maria! Eu sou o Goku',
            de: 'Goku',
            para: 'Maria',
            lido: false,
            data: new Date('2023-10-01T10:00:00Z'),
        },       
    ];

    findAll(){
        return this.recados;
    }

    findOne (id: string){
        const recado = this.recados.find(item => item.id === +id);

        if (recado) return recado;
        
        throw new NotFoundException('Recado não encontrado.');
    }

    create(body: any){
        this.lastId++;
        const id = this.lastId;
        const newRecado = {
            id,
            ...body,
        }
        this.recados.push(newRecado);

        return newRecado;
    }

    update(id: string, body: any) {
        const recadoExistenteIndex = this.recados.findIndex(item => item.id === +id);

        if (recadoExistenteIndex < 0) {
            throw new NotFoundException('Recado não encontrado.');
        }
        if (recadoExistenteIndex >= 0) {
            const recadoExistente = this.recados.find(item => item.id === +id);

            this.recados[recadoExistenteIndex] = {
                ...recadoExistente,
                ...body,
            };

            return this.recados[recadoExistenteIndex];
        }
    }

    remove(id: string) {
        const recadoExistenteIndex = this.recados.findIndex(item => item.id === +id);

        if (recadoExistenteIndex < 0) {
            throw new NotFoundException('Recado não encontrado.');
        }        

            const recado = this.recados[recadoExistenteIndex];

            this.recados.splice(recadoExistenteIndex, 1);
            
            return recado;
        }
    }

