// src/navigation/Navigation.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importera skärmar
import StartScreen from "../screens/StartScreen";
import SetupScreen from "../screens/SetupScreen";
import RoundScreen from "../screens/RoundScreen";
import ResultScreen from "../screens/ResultScreen";

export type RootStackParamList = {
  Start: undefined;
  Setup: undefined;
  Round: undefined;
  Result: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ title: "Padel Activity" }}
        />
        <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{ title: "Spelinställningar" }}
        />
        <Stack.Screen
          name="Round"
          component={RoundScreen}
          options={{ title: "Spelrundor" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Slutresultat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
