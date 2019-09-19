/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import {
  <%= classify(name) %>Options,
} from './<%= lowerCase(name) %>-options.interface';
import {
  <%= classify(name) %>OptionsFactory,
} from './<%= lowerCase(name) %>-options-factory.interface';

export interface <%= classify(name) %>AsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<<%= classify(name) %>OptionsFactory>;
  useClass?: Type<<%= classify(name) %>OptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<<%= classify(name) %>Options> | <%= classify(name) %>Options;
}