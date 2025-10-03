import Ract from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export const Spalsh = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <Text>ToastMaker</Text>
            <Image
                source={require('./assets/images/123456.png')}
                style={styles.imageStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 10,

    }
});
