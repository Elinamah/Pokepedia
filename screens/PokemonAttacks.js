import * as React from "react";
import { View, Text } from "react-native";

export default function PokemonAttacks({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() =>
          navigation.navigate("PokemonAttacks", { name: "PokemonAttacks" })
        }
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        PokemonAttacks
      </Text>
    </View>
  );
}
