import { Injectable } from '@nestjs/common';

/**
 * Service class for the application.
 */
@Injectable()
export class AppService {
  /**
   * Retrieves a greeting message.
   * @returns The greeting message.
   */
  getHello(): string {
    return 'Hello World!';
  }
}
