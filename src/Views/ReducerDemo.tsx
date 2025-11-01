import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
const ReducerDemo = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  type State = { count: number };
  type Action = { type: 'increment' | 'decrement' | 'reset' };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return initialState;
      default:
        throw new Error();
    }
  }
  return (
    <View>
      <Text>ReducerDemo</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button style={{flex:1}}
          mode="contained"
          onPress={() => dispatch({ type: 'increment' })}
        >
          
          Increment
        </Button>
        <Button
          mode="contained"
          onPress={() => dispatch({ type: 'decrement' })}
        >
          Decrement
        </Button>
        <Button style={{flex:1}}
        mode="contained" onPress={() => dispatch({ type: 'reset' })}>
        
          Reset
        </Button>
      </View>
      <Text>Count: {state.count}</Text>
    </View>
  );
};

export default ReducerDemo;
