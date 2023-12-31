import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./types";
import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./screens";
import { themeColors } from "./theme";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: themeColors.bg,
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: themeColors.bg,
              },
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: themeColors.bg,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
