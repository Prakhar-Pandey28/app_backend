// user.module.ts

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// Import necessary modules

@Module({
  providers: [UserService],
  controllers: [UserController],
  // Add necessary imports
})
export class UserModule {}
