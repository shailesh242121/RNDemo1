import { Background } from '@react-navigation/elements';
import React, { useState } from 'react';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './TodoReducer';
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
  Pressable,
} from 'react-native';
import { Text } from 'react-native-paper';

import MyStylesheet from '../../../MyStylesheet';

// const initialTodos = Array.from({ length: 10 }, (_, i) => ({
//             id: i + 1,
//             title: `Todo Item ${i + 1}`,
//             isDone: false,
//     }));

var styles = StyleSheet.create({

});

const MyEmptyListMessage = () => (
  <View style={[MyStylesheet.emptyContainer]}>
    <Text style={[MyStylesheet.emptyText]}>No items found.</Text>
    {/* You can add more components here, like an image or a button */}
  </View>
);

// interface todo {
//   id: string;
//   text: string;
//   isDone: boolean;
// }

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
  };

  const updateTodoItem = (item: any) => {
    dispatch(updateTodo(item));
  };


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={[MyStylesheet.input_box]}
          placeholder="Add Todo Item"
          onChangeText={setInputValue}
          value={inputValue}
        />

        <TouchableHighlight
          style={MyStylesheet.submit}
          onPress={() => {
            handleAddTodo();
          }}
          underlayColor="#fff"
        >
          <Text style={[MyStylesheet.submitText]}>Submit</Text>
        </TouchableHighlight>

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
    console.log(`rendering item ${item.isDone} at index ${index}`);
    return (
      <View style={MyStylesheet.container_box}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={item.isDone ? MyStylesheet.strikeThrough : {}}>`{item.text}`</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          <Pressable onPress={() => {
            updateTodoItem(item);
          }}>
            <Text>
              The user is{' '}
              {item.isDone ? 'currently' : 'not'} logged in.
            </Text>
            <Text style={[MyStylesheet.deleteText, { backgroundColor: 'green', marginRight: 10 }]}>
              {!item.isDone ? 'Mark as done' : 'UnDone'}</Text>
          </Pressable>

          <TouchableOpacity
            onPress={() => {
              console.log(`item to delete ; ${item.id} && ${item.text}`);
              Alert.alert("Are you sure to delete '" + item.text + "'?", '', [
                {
                  text: 'Cancel',
                  onPress: () => { },
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => handleDeleteTodo(item.id) },
              ]);
            }}
          >
            <Text style={MyStylesheet.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
        onPress: () => { },
        style: 'cancel',
      },
      { text: 'OK', onPress: () => handleDeleteTodo(index) },
    ]);
  }
};

export default TodoListRTK;
