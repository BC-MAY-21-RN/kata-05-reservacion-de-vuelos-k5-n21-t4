import * as React from 'react';
import {StackScreen} from './src/Components/NavigatorStack'
import { Provider } from 'react-redux'
import { Store } from './src/utils/redux/store.js'

const App = () => {

  const stackOptions = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#5974f5', 
    headerTitleStyle: {
      fontSize: 30, 
      fontWeight: 'bold',
      left: 0,
    }, 
    headerTitleAlign:'left',
  }
  const stackOptionsForm = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#5974f5', 
    title: '',
  }

  return (
    <Provider store={Store}>
      <StackScreen/>
    </Provider>
  )
}

export default App;
