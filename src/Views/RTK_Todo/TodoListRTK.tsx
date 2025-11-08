import { Background } from '@react-navigation/elements';
import React, { useState } from 'react';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './TodoReducer';
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
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e5e5e5',
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
    borderRadius: 5,
  },
});

const MyEmptyListMessage = () => (
  <View style={[styles.emptyContainer]}>
    <Text style={[styles.emptyText]}>No items found.</Text>
    {/* You can add more components here, like an image or a button */}
  </View>
);

interface todo {
  id: string;
  text: string;
  isDone: boolean;
}

const TodoListRTK = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  console.log('todo list is ' + JSON.stringify(todos));
  // const initialTodos: { id: number; title: string; isDone: boolean }[] = [];

  //   const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = () => {
    setInputValue(inputValue);
  };

  const handleAddTodo = () => {
    console.log('Adding new todo item ' + inputValue);
    // const i = todos.length + 1;
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index: Number) => {
    dispatch(deleteTodo(index));
    // const newTodos = todos.filter((_, i) => i !== index);
    // setTodos(newTodos);
  };
  // function renderItem():
  //   | import('react-native').ListRenderItem<{
  //       id: number;
  //       text: string;
  //       isDone: boolean;
  //     }>
  //   | null
  //   | undefined {
  //   throw new Error('Function not implemented.');
  // }

  // setTodos(initialTodos);

  return (
    <View style={{ flex: 1, padding: 20 }}>
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
        renderItem={renderItemDemo}
        ListEmptyComponent={MyEmptyListMessage}
        style={{ marginTop: 20, flex: 1 }}
      />
    </View>
  );

  function renderItemDemo({
    item,
    index,
  }: {
    item: { id: number; text: string; isDone: boolean };
    index: number;
  }) {
    return (
      <View style={styles.container_box}>
        <Text style={{ flex: 1 }}>{item.text}</Text>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            console.log(`item to delete ; ${item.id} && ${item.text}`);
            Alert.alert("Are you sure to delete '" + item.text + "'?", '', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              { text: 'OK', onPress: () => handleDeleteTodo(item.id) },
            ]);
          }}
        >
          <Text
            style={{
              color: 'white',
              backgroundColor: 'red',
              padding: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'darkred',
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function ItemSeparator() {
    return <View style={{ height: 1, backgroundColor: '#ccc' }} />;
  }

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

export default TodoListRTK;
