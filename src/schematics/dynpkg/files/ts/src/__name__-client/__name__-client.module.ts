/**
 *  <%= classify(name) %>ClientModule is a testing module that verifies that
 *  <%= classify(name) %>Module was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from <%= classify(name) %>Module`.
 *
 *  Once you begin customizing <%= classify(name) %>Module, you'll probably want
 *  to delete this module.
 */
import { Module } from '@nestjs/common';
import { <%= classify(name) %>ClientController } from './<%= lowerCase(name) %>-client.controller';
import { <%= classify(name) %>Module } from '../<%= lowerCase(name) %>.module';

@Module({
  controllers: [<%= classify(name) %>ClientController],
  imports: [<%= classify(name) %>Module.register({})],
})
export class <%= classify(name) %>ClientModule {}
