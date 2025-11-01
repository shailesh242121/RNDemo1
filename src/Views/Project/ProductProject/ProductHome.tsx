import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import AllList from './AllList.tsx';
import ProductItem from './ProductItem.ts';
import EditStock from './EditStock.tsx';

function ProductHome() {
  //   const [items, setItems] = useState<ProductItem[]>(data);
  const [view, setView] = useState(0);
  const [data, setDaate] = useState<ProductItem[]>([
    { id: '1', name: 'A', stock: 10 },
    { id: '2', name: 'B', stock: 5 },
    { id: '3', name: 'C', stock: 20 },
  ]);

  function backMethod(data: Array<ProductItem>) {
    setDaate(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => setView(0)}>
          <Text style={styles.button}>All Items</Text>
        </Pressable>
        <Pressable onPress={() => setView(1)}>
          <Text style={styles.button}>Low Stocks</Text>
        </Pressable>
        <Pressable onPress={() => setView(2)}>
          <Text style={styles.button}>Add Stock</Text>
        </Pressable>
      </View>

      {view == 0 && <AllList data={data} />}
      {view == 1 && <AllList data={data.filter(item => item.stock < 20)} />}
      {view == 2 && <EditStock stockList={data} callback={backMethod} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default ProductHome;
