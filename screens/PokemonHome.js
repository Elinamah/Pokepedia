import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";

import { PokemonItem } from "../components/PokemonItem";

export const PokemonHome = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPokemonList([]);
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPokemonItem = ({ item }) => (
    <PokemonItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      <FlatList
        data={filteredPokemon}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

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
  loadMoreButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  loadMoreButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
