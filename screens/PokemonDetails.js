import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const PokemonDetails = ({ route }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    fetch(route.params.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //console.log(pokemon && pokemon.sprites);

  return (
    <View style={styles.container}>
      {pokemon && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.image}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pokémon Name: {route.params.name}</Text>
      </View>
      <View style={styles.textContainer}>
        {pokemon && <Text style={styles.text}>Pokémon ID: {pokemon.id}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3cdfff",
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    margin: 10
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
