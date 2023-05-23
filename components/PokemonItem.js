import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const PokemonItem = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate("PokemonDetails", {
      name: item.name,
      id: item.id,
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
