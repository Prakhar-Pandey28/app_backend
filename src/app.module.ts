import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://prakhar2811:03122811@cluster0.6c2zrzq.mongodb.net/', {
      // Other Mongoose options if needed
    }),
    // Other modules and controllers
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
