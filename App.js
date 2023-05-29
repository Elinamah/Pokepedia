import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Menu } from "./screens/Menu";
import { Overview } from "./screens/Overview";
import { PokemonDetails } from "./screens/PokemonDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={({ route }) => ({
              title: "All Pokemon",
              headerStyle: {
                backgroundColor: "red",
              },
            })}
          />
          <Stack.Screen
            name="PokemonDetails"
            component={PokemonDetails}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
