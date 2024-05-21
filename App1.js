import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/components/app/store';
import Counter from './src/components/features/counterApp/Counter'; // Ensure the path is correct

const App1 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App1;
