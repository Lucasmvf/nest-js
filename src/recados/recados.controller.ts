import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @Get()
    findAll() {
        return 'Todos os recados';
    }
    
    @Get(':id')
    findOne(){
        return 'Um recado';
    }


}
