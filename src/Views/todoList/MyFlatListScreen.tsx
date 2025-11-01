import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const MyEmptyListMessage = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>No items found.</Text>
    {/* You can add more components here, like an image or a button */}
  </View>
);

const MyFlatListScreen = () => {
  const data = []; // This array is empty, so ListEmptyComponent will be rendered

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      )}
      ListEmptyComponent={MyEmptyListMessage}
      contentContainerStyle={data.length === 0 && styles.centerEmptySet} // Optional: for centering the empty message
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  centerEmptySet: {
    flexGrow: 1, // Ensures the contentContainer takes up available space
    justifyContent: 'center',
  },
});

export default MyFlatListScreen;