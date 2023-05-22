import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  Linking,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Overview = ({ navigation }) => {
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

  const handlePokemonPress = (uri) => {
    Linking.openURL(uri);
  };

  const renderPokemonItem = ({ item }) => (
    <PokemonItem item={item} onPress={() => handlePokemonPress(item.url)} />
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

class PokemonItem extends React.PureComponent {
  handlePress = () => {
    this.props.onPress(this.props.item.url);
  };

  render() {
    const { item } = this.props;

    return (
      <TouchableOpacity
        style={styles.box}
        key={item.name}
        onPress={this.handlePress}
      >
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              item.url.split("/")[6]
            }.png`,
          }}
          style={styles.sprite}
        />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}
