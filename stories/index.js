import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TestComponent from '../src/index';
import PanelFixedHeight from './PanelFixedHeight';

storiesOf('TestComponent', module)
  .add('normal', () => (
    <PanelFixedHeight>
      <TestComponent/>
    </PanelFixedHeight>
  ));
