import React from 'react';
import { View, Text, Button } from 'react-native';

class ClassTest extends React.Component {
   
     constructor(props) {
    super(props);
    this.state = { count: 1,
        name11: 'shailesh'
     };
  } 

  render() {
    return (
    <View>
        <Text>ClassTest</Text>
        <Button title={`Count: ${this.state.count} Name: ${this.state.name11}`} onPress={() =>
       { 
        
        this.state.name11 = this.state.count + 1;
        console.log("item is "+ this.state.count + " name is "+ this.state.name11);
        
        this.setState({ 
           
            count: this.state.count + 1 })
        } 
        }/>
            <Text>My Name is {this.state.name11}</Text>

        </View>);
  }
}

export default ClassTest;