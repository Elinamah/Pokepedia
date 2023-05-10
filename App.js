import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <ScrollView>
        {pokemonList.length > 0 ? (
          filteredPokemon.map((pokemon) => (
            <View style={styles.box} key={pokemon.name}>
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/")[6]
                  }.png`,
                }}
                style={styles.sprite}
              />
              <Text style={styles.name}>{pokemon.name}</Text>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  sprite: {
    width: 100,
    height: 100,
    margin: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  searchBarContainer: {
    margin: 10,
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
});
