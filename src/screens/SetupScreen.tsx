import React from "react";
import { Text, Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../types/navigation";
import styled from "styled-components/native";

type NavigationProp = NativeStackNavigationProp<Screens, "Setup">;

export default function SetupScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <Text variant="headlineMedium">Spelinställningar</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Round")}
        style={{ marginTop: 20 }}
      >
        Nästa: Starta matcher
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
