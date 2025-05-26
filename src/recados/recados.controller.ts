import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
    constructor(private readonly recadosService: RecadosService) {}

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(@Query() pagination: any){
        const { limit = 10, offset = 0 } = pagination;
        // return `Todos os recados. Limite=${limit}, Offset=${offset}.`;
        return this.recadosService.getRecados();
    }
    
    @Get(':id')
    findOne(@Param() parametros: any){
        console.log(parametros);
        return 'Um recado';
    }

    @Post()
    create(@Body() body: any){ 
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any){
        return{
            id,
            ...body   
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Recado ${id} removido`;
    }

    
}
