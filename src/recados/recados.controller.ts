import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
    constructor(private readonly recadosService: RecadosService) {}

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(@Query() pagination: any){
        const { limit = 10, offset = 0 } = pagination;
        // return `Todos os recados. Limite=${limit}, Offset=${offset}.`;
        return this.recadosService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.recadosService.findOne(id);
    }

    @Post()
    create(@Body() createRecadoDto: CreateRecadoDto){ 
        return this.recadosService.create(createRecadoDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateRecadoDto: UpdateRecadoDto){
        return this.recadosService.update(id, UpdateRecadoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.recadosService.remove(id);
    }

    
}
