import {
  <%= classify(name) %>Options,
} from './<%= lowerCase(name) %>-options.interface';

export interface <%= classify(name) %>OptionsFactory {
  create<%= classify(name) %>Options():
    | Promise<<%= classify(name) %>Options>
    | <%= classify(name) %>Options;
}
