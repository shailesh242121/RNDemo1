import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
// import { SearchBar } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    marginTop: 30, // Margin from the top
    padding: 10, // Padding inside the container
  },
  item: {
    backgroundColor: "green", // Background color for each item
    padding: 20, // Padding inside each item
    marginVertical: 8, // Vertical margin between items
    marginHorizontal: 16, // Horizontal margin between items
    borderRadius: 8, // Rounded corners for each item
  },
  itemText: {
    color: "white", // Text color
    fontSize: 18, // Font size for the text
  },
});

const DATA = [
  { id: "1", title: "Data Structures " },
  { id: "2", title: "STL1" },
  { id: "3", title: "C++" },
  { id: "4", title: "Java" },
  { id: "5", title: "Python" },
  { id: "6", title: "CP" },
  { id: "7", title: "ReactJs" },
  { id: "8", title: "NodeJs" },
  { id: "9", title: "MongoDb" },
  { id: "10", title: "ExpressJs" },
  { id: "11", title: "PHP" },
  { id: "12", title: "MySql" },
];

class SearchView extends React.Component {

  render() {
    return (
      <View>
        <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 22 }}>List View</Text>
        {/* FlatList to display the filtered data */}
        <FlatList style={{ marginBottom: 70 }}
          data={DATA} // Data to display in the list
          renderItem={({ item }) => <Item title={item.title} />} // Render each item using the Item component
          keyExtractor={(item) => item.id} // Unique key for each item
          
        />
      </View>
    )
  };



}


const Item = ({ title }: { title: string }) => (
  <View style={styles.item}> {/* Style for each item */}
    <Text style={styles.itemText}>{title}</Text> {/* Display the title */}
  </View>
);


export default SearchView;