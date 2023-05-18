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
import { TouchableOpacity } from "react-native-gesture-handler";

export const Overview = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    setPokemonList([]); // Reset the pokemonList when offset changes
    fetchPokemons();
  }, [offset, limit]);

  const fetchPokemons = () => {
    const currentOffset = pokemonList.length;
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${currentOffset}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPokemonList((prevList) => [...prevList, ...data.results]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      <ScrollView>
        {filteredPokemon.map((pokemon) => (
          <TouchableOpacity
            style={styles.box}
            key={pokemon.name}
            onPress={() =>
              navigation.navigate("Details", {
                name: pokemon.name,
                id: pokemon.id,
              })
            }
          >
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`,
              }}
              style={styles.sprite}
            />
            <Text style={styles.name}>{pokemon.name}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.loadMoreButtonContainer}>
          <TouchableOpacity
            style={styles.loadMoreButton}
            onPress={handleLoadMore}
          >
            <Text style={styles.loadMoreButtonText}>Load More</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
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
