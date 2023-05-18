import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

export const Menu = ({ navigation }) => {
  const handleImagePress = () => {
    navigation.navigate("Overview", { name: "Overview" });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{
            uri: "https://www.pokemonbollar.se/wp-content/uploads/2017/02/pokemon-boll-pokeball.jpg",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Click the image to continue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
  }
});
