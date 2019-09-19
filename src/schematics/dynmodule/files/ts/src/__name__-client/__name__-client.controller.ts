/**
 *  <%= classify(name) %>ClientController is a testing controller that verifies that
 *  <%= classify(name) %>Module was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from <%= classify(name) %>Module`.
 *
 *  Once you begin customizing <%= classify(name) %>Module, you'll probably want
 *  to delete this controller.
 */
import { Controller, Get } from '@nestjs/common';
import { <%= classify(name) %>Service } from '../<%= lowerCase(name) %>.service';

@Controller()
export class <%= classify(name) %>ClientController {
  constructor(private readonly <%= lowerCase(name) %>Service: <%= classify(name) %>Service) {}

  @Get()
  index() {
    return this.<%= lowerCase(name) %>Service.test();
  }
}
