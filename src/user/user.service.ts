import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserCreationDTO } from '../interfaces/user-creation.dto'; // Import the UserCreationDTO interface
import { hashPassword } from '../utils/password.utils';
import { User } from 'src/interfaces/user.interface';


@Injectable()
export class UserService {
  async login(credentials: { username: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly userRepository: UserRepository) {}

  async signup(userData: UserCreationDTO): Promise<User | null> {
    const existingUser = await this.userRepository.findByUsername(userData.username);
    if (existingUser) {
      return null; // User already exists
    }

    const hashedPassword = await hashPassword(userData.password);
    if (!hashedPassword) {
      return null; // Handle hashing failure, if needed
    }

    const newUser = await this.userRepository.create({
        username: userData.username,
        password: hashedPassword,
        id: '',
        email: ''
    });

    return newUser; // Return the newly created user upon successful signup
  }
}
