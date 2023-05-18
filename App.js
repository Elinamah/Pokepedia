import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Details } from "./screens/Details";
import { Menu } from "./screens/Menu";
import { Overview } from "./screens/Overview";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: "HomePage" }}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
