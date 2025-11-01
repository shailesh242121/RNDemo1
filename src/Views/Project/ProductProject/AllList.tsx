import { FlatList, StyleSheet, View, Text } from 'react-native';
import ProductItem from './ProductItem';

function ALLList(props: { data: Array<ProductItem> }) {
  return (
    <View style={styles.container}>
      <Text> All Lists</Text>
      <FlatList data={props.data} renderItem={renderItem} />
    </View>
  );
}

function renderItem({ item }: { item: ProductItem }) {
  return (
    <View
      style={[
        styles.row,
        { backgroundColor: item.stock < 20 ? '#400000' : 'white' },
      ]}
    >
      <Text style={{ flex: 2, color: item.stock < 20 ? 'white' : 'black' }}>
        {item.name}
      </Text>
      <Text style={{ color: item.stock < 20 ? 'white' : 'black' }}>
        {item.stock}
      </Text>
    </View>
  );
}

export default ALLList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
