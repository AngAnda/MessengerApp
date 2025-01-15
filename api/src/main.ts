import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws' //Add this line
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app)) 
  app.use(
    session({
      secret: 'my-secret-key',
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000, 
        httpOnly: true, 
      },
    }),
  );
   app.enableCors({
    origin: 'http://localhost:4200', 
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type, Authorization', 
    credentials: true, 
  });

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Descrierea API-ului aplicației')
    .setVersion('1.0')
    .addTag('users') // Adaugă tag-uri pentru clasificarea rutelor
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Accesează documentația la /api-docs
  

  await app.listen(3000);
}
bootstrap();

