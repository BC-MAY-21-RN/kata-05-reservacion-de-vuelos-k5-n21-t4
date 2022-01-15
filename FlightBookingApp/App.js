import * as React from 'react';
import {StackScreen} from './src/Components/NavigatorStack'
import { Provider } from 'react-redux'
import { Store } from './src/utils/redux/store.js'

const App = () => {
  return (
    <Provider store={Store}>
      <StackScreen/>
    </Provider>
  )
}

export default App;

