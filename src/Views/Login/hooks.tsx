
import React, { Component, useMemo } from 'react';
import { View, Button, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const HooksTest = () => {
  const [state, setState] = React.useState({
    // Add state variables here if needed               
    count: 0,
    otherVar: 'example'
  });

  const [counter,setCounter] = React.useState<number>(0);

  const [user, setUser] = React.useState<{name: string, age: number}>(null as any);

  React.useEffect(() => {
    // Add any initialization logic here
    console.log('HooksTest component mounted'+ `${counter}`);

    setTimeout(() => {
        setUser({name: 'John Doe', age: 30});
    }, 5000);

    return () => {
      console.log('HooksTest component will unmount test'+ `${counter}`); // Cleanup logic here
    
    };
  }, [counter]);

   const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, [counter]); // Dependency array: recalculate only when 'count' changes


  if(true){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 24}}>Loading.......</Text>
            <ActivityIndicator style={{marginTop:10}} size="large" color="rgba(255, 0, 140, 1)" />
        </View>
    )
  }else{

  return (
    <View>

    {user && <Text>User: {user.name}, Age: {user.age}</Text>}

<Text>Expensive Calculation Result: {expensiveCalculation} </Text>
    <Button title="Hello" onPress={() => {console.log('Button pressed')
        setState({count: state.count + 1, otherVar: `${state.count}`});
    }} /> 
    <Button title="UpdateCounter" onPress={() => {console.log('Button pressed')
       setCounter(counter+1);
    }} />
    <Text>Count: {state.count}  </Text>
    <Text>OtherVar: {state.otherVar}  </Text>
    <Text>Counter: {counter}  </Text>
    </View>
  );
};
}

export default HooksTest;

//   useState() {
//     // Add state management logic here
//     console.log('useState called');
//   }

//   componentDidMount() {
//     // Add any initialization logic here
//     console.log('HooksTest component mounted');
//   }

//   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
//       console.log('HooksTest component updated');

//   }

//   componentWillUnmount(): void {
//         console.log('HooksTest component will unmount');
//   }

//   render() {
//     return (   
//         <Button title="Hello"></Button>
//     );
//   }

// }

// export default HooksTest;