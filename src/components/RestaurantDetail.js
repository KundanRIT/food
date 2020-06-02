import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";

const RestaurantDetail = ({restaurant}) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={
          {uri: restaurant.image_url}
        }
      />
      <Text style={styles.titleStyle}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10
  },
  imageStyle: {
    borderRadius: 5,
    height: 120,
    width: 250,
    marginBottom: 5
  },
  titleStyle: {
    fontWeight: "bold"
  }
});

export default RestaurantDetail;