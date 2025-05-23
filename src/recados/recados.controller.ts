import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {

    @Get()
    findAll() {
        return 'Todos os recados';
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
}
