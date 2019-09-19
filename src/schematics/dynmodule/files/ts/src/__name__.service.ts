// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import { <%= upperCase(name) %>_OPTIONS} from './constants';

/**
 * Sample interface for<%= classify(name) %>Service
 *
 * Customize this as needed to describe the <%= classify(name) %>Service
 *
 */
interface I<%= classify(name) %>Service {
  test(): Promise<any>;
}

@Injectable()
/**
 *  You can remove the dependencies on the Logger if you don't need it.  You can also
 *  remove the `async test()` method.
 *
 *  The only thing you need to leave intact is the `@Inject(<%= upperCase(name) %>_OPTIONS) private _<%= lowerCase(name) %>Options`.
 *
 *  That injected dependency gives you access to the options passed in to
 *  <%= classify(name) %>Service.
 *
 */
export class <%= classify(name) %>Service implements I<%= classify(name) %>Service {
  private readonly logger: Logger;
  constructor(
    @Inject(<%= upperCase(name) %>_OPTIONS) private _<%= lowerCase(name) %>Options,
  ) {
    this.logger = new Logger('<%= classify(name) %>Service');
    this.logger.log(`Options: ${JSON.stringify(this._<%= lowerCase(name) %>Options)}`);
  }

  async test(): Promise<any> {
    return 'Hello from <%= classify(name) %>Module!';
  }
}