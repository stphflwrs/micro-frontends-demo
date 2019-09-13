import React from 'react';
import { storiesOf } from '@storybook/react';
import { asReact as Counter } from '../src';

storiesOf('Counter', module)
  .add('default', () => {
    return (<Counter/>);
  });
