import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller responsible for handling requests related to the application.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Handles GET requests to the root endpoint.
   * @returns A string representing the response.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
