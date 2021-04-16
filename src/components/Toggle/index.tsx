import React from 'react';

import { 
  Container,
  ToggleLabel,
  ToggleSelector
} from '../Toggle/styles';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={()=>console.log('Mudou')}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;