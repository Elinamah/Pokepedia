import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const PokemonItem = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate("PokemonDetails", {
      name: item.name,
      url: item.url,
    });
  };

  return (
    <TouchableOpacity style={styles.box} key={item.name} onPress={handlePress}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  box: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    margin: 2,
    alignItems: "center",
  },
  sprite: {
    width: 108,
    height: 100,
    margin: 10,
  },
  name: {
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
