import { Background } from '@react-navigation/elements';
import React, { useState ,useCallback } from 'react';
import { TextInput, BackHandler, Touchable, TouchableOpacity,Alert, TouchableHighlight, View, Button, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';


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
    submitText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingTop:7,
        paddingBottom:7,
        paddingRight: 10,
       
          borderWidth: 1,
        borderColor: '#000',
         backgroundColor:'green',
         borderRadius:5,
    
       
    }
});

const TodoList = () => {




    const initialTodos: { id: number; title: string; isDone: boolean }[] = [];

    const [todos, setTodos] = useState(initialTodos);
    const [inputValue, setInputValue] = useState('');


    
      useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            // Return true to prevent the default back action (e.g., popping the screen).
            // Return false to allow the default back action.
    
            console.log("Back button pressed in home screen111");
            return true;
          };
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          // return () => {
          //   BackHandler.removeEventListener('hardwareBackPress', onBackPress);
          // };
        }, [])
      );

    const handleInputChange = () => {
        setInputValue(inputValue);
    }

    const handleAddTodo = () => {
        console.log("Adding new todo item " + inputValue);
        const i = todos.length + 1;
        if (inputValue.trim() !== '') {
            console.log("Adding new todo item inside if condition " + inputValue);
            setTodos([...todos, {
                id: i + 1,
                title: inputValue,
                isDone: false,
            }]);
            todos.forEach(todo => {
                console.log("{title}" + todo.title + " {id}" + todo.id + " {isDone}" + todo.isDone);
            });
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index: Number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }
    // setTodos(initialTodos);

    return (

        <View style={{ flex: 1, padding: 20, backgroundColor: '#f0f0f0' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput style={{ flex: 1, backgroundColor: 'white', color: 'black', height: 40, padding: 10, borderWidth: 1, borderRadius: 5, margin: 10 }}
                    placeholder='Add Todo Item'
                    onChangeText={setInputValue}
                    value={inputValue}
                />

                <TouchableHighlight
                    style={styles.submit}
                    onPress={() => { handleAddTodo() }}
                    underlayColor='#fff'>
                    <Text style={[styles.submitText]}>Submit</Text>
                </TouchableHighlight>
{/* 
                <Button title='Add' onPress={() => { handleAddTodo() }} /> */}
            </View>


            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 10, marginVertical: 5, borderRadius: 5 }}>
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                        <TouchableOpacity onPress={() => showAlert(index)}>
                            <Text style={[styles.submitText, { backgroundColor:'red'}]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                style={{ marginTop: 20 }}


            />
        </View>
    );

    function showAlert(index: number) {
        let item = todos[index];
        Alert.alert("Are you sure to delete '"+item.title+
        "'", "", [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            { text: "OK", onPress: () => handleDeleteTodo(index) }
        ]);
    }


}

export default TodoList;