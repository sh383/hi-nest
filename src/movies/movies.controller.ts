import { Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
       return 'hello' 
    }
    @Patch('/:id')
    patch(@Param('id') movieId:string){
        return `this will patch ${movieId}`
    }
}
