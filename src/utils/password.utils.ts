import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const saltRounds = 10; // Adjust the salt rounds as needed (more rounds = more secure but slower)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    // Handle error (e.g., log or throw)
    throw new Error('Error hashing password');
  }
};

export const comparePasswords = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
  } catch (error) {
    // Handle error (e.g., log or throw)
    throw new Error('Error comparing passwords');
  }
};
