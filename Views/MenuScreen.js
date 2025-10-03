import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

class Menu extends Component {
    constructor(props) {
    super(props)

      this.state={
        menuItems:[] //Define your menuitems as per props
       }
    }

    renderItem({item,index}){
      return <Text>{item.title}</Text>
    }

    render() {
        var {menuItems} = this.state;
        var {x, y, width, positionY} = this.props.dimension;
        var height = 120;
        var left = x - (width + 5);
        return (
            <View style={[styles.menuContainer, {top: positionY, left, width, height}]}>
                  <FlatList
                      data={menuItems}
                      renderItem={this.renderItem.bind(this)}
                      keyExtractor={(item, index) => index.toString()}
                    />
              </View>    
        );
    }
}

export default Menu;

const styles=StyleSheet.create({
    menuContainer:{
      flex: 1,
      backgroundColor:'white',
      position:'absolute',
      borderRadius:5,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    }
});