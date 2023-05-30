import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://wallpaperaccess.com/full/1794017.png" }}
          style={styles.backgroundImage}
        >
          {pokemon && (
            <View style={styles.imageContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: pokemon.sprites.front_default }}
                  style={styles.image}
                />
                <Image
                  source={{ uri: pokemon.sprites.front_shiny }}
                  style={styles.image}
                />
              </View>
            </View>
          )}
          <View style={styles.textContainer}>
            {pokemon && <Text style={styles.text}>ID: {pokemon.id}</Text>}
          </View>
          <View style={styles.textContainer}>
            {pokemon && (
              <Text style={styles.text}>
                Abilities:{" "}
                {pokemon.abilities
                  .map(
                    (ability) =>
                      ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)
                  )
                  .join(", ")}
              </Text>
            )}
          </View>
          <View style={styles.textContainer}>
            {pokemon && (
              <Text style={styles.text}>
                Moves:
                {pokemon.moves.map((move) => (
                  <Text key={move.move.name}>
                    {" "}
                    {move.move.name.charAt(0).toUpperCase() +
                      move.move.name.slice(1) +
                      ","}
                  </Text>
                ))}
              </Text>
            )}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    margin: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  imageWrapper: {
    flexDirection: "row", // Display images side by side
  },
  image: {
    width: Dimensions.get("window").width / 2.1,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "white",
    margin: 5,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
