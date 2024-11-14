import { Inject, Injectable } from "@nestjs/common";
import { CommentEntity } from "src/entites/comment.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentService{
    constructor(@Inject('COMMENT_REPOSITORY') private readonly postRepository: Repository<CommentEntity>){

    }

    async finAll(){
        const post = await this.postRepository.find();
        return post;
    }

    async finAOne(id: string){
        const post = await this.postRepository.findOne({where : {id}});
        return post;
    }

    create(payload : any ){
        const post = this.postRepository.create()
        post.comment = payload.comment;
        post.comment_date = payload.comment_date;
       

        return this.postRepository.save(post);
    }
    async update(id: string, payload : any ){
        const post = await this.postRepository.findOne({where : {id}})
        post.comment = payload.comment;
        post.comment_date = payload.comment_date;

        return this.postRepository.save(post)
        
    }
    async delete(id : string){
        const post = await this.postRepository.findOne({where : {id}})

        return this.postRepository.delete(id)
        
    }
}