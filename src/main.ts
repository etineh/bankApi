import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { DotenvConfigOptions } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));   

  const config = new DocumentBuilder()
    .setTitle('Bank App')
    .setDescription('API description for bank app.')
    .setVersion('1.0')
    .addTag('bankApp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('bankApi', app, document);

  await app.listen(process.env.PORT || "4000", ()=>{
    console.log("running on port 4000")
  });
}
bootstrap();
