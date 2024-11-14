import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommentService } from "src/services/comment.service";

@Controller('coments')

export class CommentController{

    constructor(private readonly commentService: CommentService){

    }
  
    @Get()
    async findcomment(){
      const response = await this.commentService.finAll()
      return response;
    }
    
    @Get(':id')
    async findOnecomment(@Param('id') id : string){
      const response = await this.commentService.finAOne(id)
      return response;
    }
  
    @Post()
    async createcomment(@Body() payload:any){
      const response = await this.commentService.create(payload)
      return response;
    }
  
    @Put(':id')
    async updatecomment(@Param('id') id:string, @Body() payload:any){
      const response = await this.commentService.update(id, payload)
      return response;
    }
  
    @Delete(':id')
    async deletecomment(@Param('id') id: string){
        const response = await this.commentService.delete(id);
        return response;
    }

}