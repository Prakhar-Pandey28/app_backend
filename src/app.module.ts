// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://prakhar2811:03122811@cluster0.6c2zrzq.mongodb.net/'), // Replace with your MongoDB URI
    UserModule,
  ],
})
export class AppModule {}
