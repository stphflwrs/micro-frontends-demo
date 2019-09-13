import React from 'react';
import { storiesOf } from '@storybook/react';
import { asReact as RandomColor } from '../src';


storiesOf('Random Color', module)
  .add('no initial color', () => {
    return <RandomColor/>;
  })
  .add('initial color', () => {
    return <RandomColor initialColor={"#000000"}/>
  });
