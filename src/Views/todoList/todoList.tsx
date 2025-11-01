import { Background } from '@react-navigation/elements';
import React, { useState } from 'react';
import {
  TextInput,
  Touchable,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  View,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Text } from 'react-native-paper';

// const initialTodos = Array.from({ length: 10 }, (_, i) => ({
//             id: i + 1,
//             title: `Todo Item ${i + 1}`,
//             isDone: false,
//     }));

var styles = StyleSheet.create({
  container_box: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Vertically center children
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input_box: {
    flex: 1, // Allow TextInput to take up available space
    height: 40,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 10,
    marginRight: 10, // Add some space between TextInput and Button
    borderRadius: 5,
  },
  submit: {
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 10,

    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

const TodoList = () => {
  const initialTodos: { id: number; title: string; isDone: boolean }[] = [];

  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = () => {
    setInputValue(inputValue);
  };

  const handleAddTodo = () => {
    console.log('Adding new todo item ' + inputValue);
    const i = todos.length + 1;
    if (inputValue.trim() !== '') {
      console.log('Adding new todo item inside if condition ' + inputValue);
      setTodos([
        ...todos,
        {
          id: i + 1,
          title: inputValue,
          isDone: false,
        },
      ]);
      todos.forEach(todo => {
        console.log(
          '{title}' +
            todo.title +
            ' {id}' +
            todo.id +
            ' {isDone}' +
            todo.isDone,
        );
      });
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index: Number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
    function renderItem(): import("react-native").ListRenderItem<{ id: number; title: string; isDone: boolean; }> | null | undefined {
        throw new Error('Function not implemented.');
    }

  // setTodos(initialTodos);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f0f0f0' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: 'white',
            color: 'black',
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            margin: 10,
          }}
          placeholder="Add Todo Item"
          onChangeText={setInputValue}
          value={inputValue}
        />

        <TouchableHighlight
          style={styles.submit}
          onPress={() => {
            handleAddTodo();
          }}
          underlayColor="#fff"
        >
          <Text style={[styles.submitText]}>Submit</Text>
        </TouchableHighlight>
        {/* 
                <Button title='Add' onPress={() => { handleAddTodo() }} /> */}
      </View>

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
           ListEmptyComponent={(MyEmptyListMessage())}
        renderItem={renderItemDemo()}
        style={{ marginTop: 20 }}
      />
    </View>
  );

  function renderItemDemo({ item, index }: { item: { id: number; title: string; isDone: boolean }; index: number }) {
    return (
        <TouchableOpacity onPress={() => showAlert(index)}> 
        <View style={styles.container_box}>
            <Text>{item.title}</Text>
        </View>
        </TouchableOpacity>
    );
  }

  function ItemSeparator() {
    return <View style={{ height: 1, backgroundColor: '#ccc' }} />;
  }

  const MyEmptyListMessage = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No items found.</Text>
      {/* You can add more components here, like an image or a button */}
    </View>
  );

  function showAlert(index: number) {
    let item = todos[index];
    Alert.alert("Are you sure to delete '" + item.title + "'", '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'OK', onPress: () => handleDeleteTodo(index) },
    ]);
  }
};

export default TodoList;
