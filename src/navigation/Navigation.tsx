import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../types/navigation";

import StartScreen from "../screens/StartScreen";
import SetupScreen from "../screens/SetupScreen";
import RoundScreen from "../screens/RoundScreen";
import ResultScreen from "../screens/ResultScreen";

const Stack = createNativeStackNavigator<Screens>();

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
          options={{ title: "Rundor" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Resultat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
