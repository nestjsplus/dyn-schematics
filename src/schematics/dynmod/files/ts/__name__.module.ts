import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= lowerCase(name) %>.service';
import {
  <%= dashToUnderscore(upperCase(name)) %>_OPTIONS,
} from './constants';
import {
  <%= classify(name) %>Options,
  <%= classify(name) %>AsyncOptions,
  <%= classify(name) %>OptionsFactory,
} from './interfaces';
import { create<%= classify(name) %>Providers } from './<%= lowerCase(name) %>.providers';

@Global()
@Module({
  providers: [<%= classify(name) %>Service],
  exports: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module {
  /**
   * Registers a configured <%= classify(name) %> Module for import into the current module
   */
  public static register(
    options: <%= classify(name) %>Options,
  ): DynamicModule {
    return {
      module: <%= classify(name) %>Module,
      providers: create<%= classify(name)%>Providers(options),
    };
  }

  /**
   * Registers a configured <%= classify(name) %> Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: <%= classify(name) %>AsyncOptions,
  ): DynamicModule {
    return {
      module: <%= classify(name) %>Module,
      imports: options.imports || [],
      providers: [
        ...this.createProviders(options),
      ],
    };
  }

  private static createProviders(
    options: <%= classify(name) %>AsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: <%= classify(name) %>AsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: <%= dashToUnderscore(upperCase(name)) %>_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
  provide: <%= dashToUnderscore(upperCase(name)) %>_OPTIONS,
      useFactory: async (optionsFactory: <%= classify(name) %>OptionsFactory) =>
        await optionsFactory.create<%= classify(name) %>Options(),
      inject: [options.useExisting || options.useClass],
    };
  }

 }
