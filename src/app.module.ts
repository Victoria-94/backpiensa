import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule } from '@nestjs/config';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import configuration from './config/configuration';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    ConfigModule .forRoot({
        load: [configuration],
        validationSchema,
        isGlobal: true,
      }),
    PrismaModule, 
    ArticlesModule],
  controllers: [AppController],
  providers: [
    AppService,
    {provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule {}
