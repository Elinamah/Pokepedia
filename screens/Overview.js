import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigatior } from "@react-navigation/bottom-tabs";
import Icon from "react-native-ico-material-design";

// Screens
import { PokemonAttacks } from "./screens/PokemonAttacks";
import { PokemonHome } from "./screens/PokemonHome";
import { PokemonMiscellaneous } from "./screens/PokemonMiscellaneous";

// Screen names
const home = "Home";
const attack = "Attack";
const miscellaneous = "Miscellaneous";

const Tab = createBottomTabNavigatior();

export default function Overview({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === home) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === attack) {
              iconName = focused ? "attack" : "attack-outline";
            } else if (routeName === miscellaneous) {
              iconName = focused ? "miscellaneous" : "miscellaneous-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={home} component={PokemonHome} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
