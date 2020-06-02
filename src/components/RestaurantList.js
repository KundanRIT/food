import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantsList = ({title, restaurants, navigation}) => {

  if (!restaurants.length) {
    return null;
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {navigation.navigate("Restaurant", {id: item.id})}}>
              <RestaurantDetail restaurant={item}/>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(restaurant) => restaurant.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5
  }
});

export default withNavigation(RestaurantsList);