import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ComparableValue from '../src/index';
import PanelFixedHeight from './PanelFixedHeight';

storiesOf('Test Comparable Value Only Text.', module)
  .add('Data type: Plain Text', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="Lorem ipsum dolor sit amet."
        type="plaintext" />
    </PanelFixedHeight>
  ))
  .add('Data type: Quantity', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="850062140"
        type="quantity" />
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [62140.125463]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="62140.125463"
        type="number_2f" />
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [456132]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="456132"
        type="number_2f" />
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [-1]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="-1"
        type="number_4f"/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [1]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="1"
        type="number_4f"/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [0]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="0"
        type="number_4f"/>
    </PanelFixedHeight>
  ));

storiesOf('Test Comparable Value With Comparable.', module)
  .add('Data type: Plain Text', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="Lorem ipsum dolor sit amet."
        type="plaintext" />
    </PanelFixedHeight>
  ))
  .add('Data type: Quantity', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="850062140"
        type="quantity"
        isComparable={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [62140.125463]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="62140.125463"
        type="number_2f"
        isComparable={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [456132]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="456132"
        type="number_2f"
        isComparable={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [-456132]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="-456132"
        type="number_2f"
        isComparable={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [-1]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="-1"
        type="number_4f"
        isComparable={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [1]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="1"
        type="number_4f"
        isComparable={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [0]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="0"
        type="number_4f"
        isComparable={true}/>
    </PanelFixedHeight>
  ));

storiesOf('Test Comparable Value With Sign.', module)
  .add('Data type: Plain Text', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="Lorem ipsum dolor sit amet."
        type="plaintext" />
    </PanelFixedHeight>
  ))
  .add('Data type: Quantity', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="850062140"
        type="quantity"
        hasSign={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [62140.125463]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="62140.125463"
        type="number_2f"
        hasSign={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [456132]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="456132"
        type="number_2f"
        hasSign={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 2 Decimal Places [-456132]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="-456132"
        type="number_2f"
        hasSign={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [-1]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="-1"
        type="number_4f"
        hasSign={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [1]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="1"
        type="number_4f"
        hasSign={true}/>
    </PanelFixedHeight>
  ))
  .add('Data type: Number with 4 Decimal Places [0]', () => (
    <PanelFixedHeight>
      <ComparableValue
        value="0"
        type="number_4f"
        hasSign={true}/>
    </PanelFixedHeight>
  ));

