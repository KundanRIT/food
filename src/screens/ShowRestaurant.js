import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Image, StyleSheet} from "react-native";
import yelp from "../api/yelp";

const ShowRestaurant = ({navigation}) => {
  const id = navigation.getParam("id");
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id)
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return (
            <Image source={{uri: item}} style={styles.imageStyle}/>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center"
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ShowRestaurant;