import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('promary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'blue',
      Secoundry: '#f22222',
    };
    const defaultValue = '#999999';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value} />;
  });
