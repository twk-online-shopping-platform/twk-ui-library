import React, { ReactElement } from 'react';
import { storiesOf, addDecorator, ComponentMeta } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Header from './Header';

const authSearchOptions = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
const searchFieldChangeHanlder = (value: string) => {
  console.log('changed', value);
};

storiesOf('MaterialUI', module)
  .addDecorator(muiTheme())
  .add('MainHeader', () => (<Header searchFieldHandler={searchFieldChangeHanlder} />));
