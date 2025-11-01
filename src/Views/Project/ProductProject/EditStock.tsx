import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import ProductItem from './ProductItem';
import React from 'react';

type EditStockProps = {
  stockList: Array<ProductItem>;
  callback: (data: Array<ProductItem>) => void;
};

export default function EditStock(props: EditStockProps) {
  console.log('EditStock props:', props);
  const [productName, setProductName] = React.useState<string>('');
  const [stockValue, setStockValue] = React.useState<string>('');
  const [prodId, setProdId] = React.useState<string>('');
  const [buttonName, setButtonName] = React.useState<string>('Add Stock');

  function handleAddStock() {
    if (
      productName == '' ||
      stockValue == '' ||
      Number.isNaN(parseInt(stockValue))
    ) {
      Alert.alert('Please enter valid product name and stock value');
      return;
    }

    setStockValue('');
    setProductName('');

    if (prodId != '') {
      const list = props.stockList.map(prod => {
        if (prod.id == prodId) {
          prod.name = productName;
          prod.stock = parseInt(stockValue);
        }
        return prod;
      });

      props.callback(list);
    } else {
      const product = {
        id: Math.random().toString(),
        name: productName,
        stock: parseInt(stockValue),
      };
      props.callback([...props.stockList, product]);
    }
  }
  function handleEditStock(item: ProductItem) {
    setProdId(item.id);
    setProductName(item.name);
    setStockValue(item.stock.toString());
    setButtonName('Update Stock');

    // props.stockList.map(prod => {
    //   if (prod.id == item.id) {
    //     prod.name = productName;
    //     prod.stock = parseInt(stockValue);
    //   }
    // });

    // props.callback(list)

    // props.callback(props.stockList);
  }

  function handleDeleteStock(item: ProductItem) {
    const name = item.name;
    Alert.alert('Alert', `Product ${item.name} deleted.`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const list = props.stockList.filter(prod => prod.id !== item.id);
          props.callback(list);
        },
      },
    ]);
  }

  function renderItem({ item }: { item: ProductItem }) {
    return (
      <View style={[styles.row]}>
        <Text>{item.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            alignContent: 'space-around',
            justifyContent: 'space-around',
            padding: 5,
          }}
        >
          <Text>{item.stock}</Text>
          <Pressable
            style={{
              padding: 5,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
            }}
            onPress={() => handleEditStock(item)}
          >
            <Text>Edit</Text>
          </Pressable>
          <Pressable
            style={{
              padding: 5,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
            }}
            onPress={() => handleDeleteStock(item)}
          >
            <Text>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Edit Stock Here</Text>
      <TextInput
        style={styles.inputbox}
        placeholder="Enter product ID to edit stock"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.inputbox}
        placeholder="Enter new stock value"
        value={stockValue}
        onChangeText={setStockValue}
      />
      <Pressable style={styles.button} onPress={handleAddStock}>
        <Text style={{ color: 'white' }}>{buttonName}</Text>
      </Pressable>
      <Text>Stock List</Text>
      <FlatList
        data={props.stockList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  inputbox: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    marginVertical: 8,
  },
});
