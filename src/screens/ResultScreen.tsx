import React from "react";
import { Text, Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../types/navigation";
import styled from "styled-components/native";

type NavigationProp = NativeStackNavigationProp<Screens, "Result">;

export default function ResultScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <Text variant="headlineMedium">Slutresultat</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Start")}
        style={{ marginTop: 20 }}
      >
        Spela igen
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
