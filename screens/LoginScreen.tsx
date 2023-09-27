import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<StackParamList, "Login">;
type LoginNavigationProp = Props["navigation"];

export default function LoginScreen() {
  const navigation = useNavigation<LoginNavigationProp>();

  const backPressHandler = () => {
    navigation.goBack();
  };

  const signPressHandler = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex">
        <View className="flex flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-400 rounded-tr-2xl rounded-bl-2xl p-2 ml-4"
            onPress={backPressHandler}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center pb-5">
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4 ">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="josh@gmail.com"
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 ml-4 ">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            value="test12345"
            placeholder="Enter Password"
            secureTextEntry
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-gray-700 font-xl font-bold text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold py-5 text-center">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center gap-x-3 mt-7">
          <Text className="text-gray-700 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={signPressHandler}>
            <Text className="font-semibold text-yellow-400">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
