import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export const PokemonItem = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate("PokemonDetails", {
      name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
      url: item.url,
    });
  };

  return (
    <TouchableOpacity style={styles.box} key={item.name} onPress={handlePress}>
      <ImageBackground
        source={{ uri: "https://wallpaperaccess.com/full/1794017.png" }}
        style={styles.background}
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
      </ImageBackground>
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
    borderColor: "orange",
    margin: 2,
    alignItems: "center",
    backgroundColor: "yellow",
  },
  background: {
    width: 120,
    borderRadius: 10,
    margin: 4,
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
    textAlign: "center",
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
