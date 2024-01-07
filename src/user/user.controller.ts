// user.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() credentials: { username: string; password: string }) {
    return this.userService.login(credentials);
  }

  @Post('/signup')
  async signup(@Body() userData: { username: string; password: string }) {
    return this.userService.signup(userData);
  }
}
