  
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import ReactSimpleCountdown from "./ReactSimpleCountdown";

const stories = storiesOf('ReactSimpleCountdown', module);




stories.addDecorator(withKnobs);

storiesOf('ReactSimpleCountdown', module)
  .add('Base', () => (
    <ReactSimpleCountdown time={360} />
  ));