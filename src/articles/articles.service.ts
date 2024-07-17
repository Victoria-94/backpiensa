import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/prisma/base.service';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService extends BaseService<Article, CreateArticleDto, UpdateArticleDto>{
  constructor(prisma: PrismaService) {
    super(prisma, 'article');
  }
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.prisma.article.create({ data: createArticleDto});
  }

  async findAll(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  async findOne(id: string): Promise<Article> {
    return this.prisma.article.findUnique({where: { id }});
  }

  async update(id: string, updateHeroDto: UpdateArticleDto): Promise<Article> {
    return this.prisma.article.update({where: { id }, data: updateHeroDto });
  }

  async remove(id: string): Promise<Article> {
    return this.prisma.article.delete({ where: { id }});
  }
}