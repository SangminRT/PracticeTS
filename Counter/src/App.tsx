/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import Styled from 'styled-components/native';
import Counter from '~/Screens/counter';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
 `;

const App = () => {
  return (
    <Container>
      <Counter title="This is a Counter App" initValue={6} />
    </Container>
  );
};
export default App;
