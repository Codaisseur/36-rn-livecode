import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";

import BooksListScreen from "./screens/BooksListScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="BooksList" component={BooksListScreen} />
        <Tab.Screen name="Book" component={BookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function BookScreen() {
  const route = useRoute();

  const { title, description } = route.params.book;

  console.log("do I have the route params?", route.params);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>You should read this book!</Text>

      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
