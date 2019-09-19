import {
  <%= classify(name) %>Options,
} from './interfaces';

import {
  <%= upperCase(name) %>_OPTIONS,
} from './constants';

export function create<%= classify(name) %>Providers(
  options: <%= classify(name) %>Options,
) {
  return [
    {
      provide: <%= upperCase(name) %>_OPTIONS,
      useValue: options,
    },
  ];
}
