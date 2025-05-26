import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @Get()
    findAll(@Query() pagination: any){
        const { limit = 10, offset = 0 } = pagination;
        return `Todos os recados. Limite=${limit}, Offset=${offset}.`;
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
