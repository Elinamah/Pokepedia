import * as React from "react";
import { View, Text } from "react-native";

export default function PokemonMiscellaneous({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() =>
          navigation.navigate("PokemonMiscellaneous", {
            name: "PokemonMiscellaneous",
          })
        }
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        PokemonMiscellaneous
      </Text>
    </View>
  );
}
