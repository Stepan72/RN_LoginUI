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

type Props = NativeStackScreenProps<StackParamList, "SignUp">;
type SignUpNavigationProp = Props["navigation"];

export default function SignUpScreen() {
  const navigation = useNavigation<SignUpNavigationProp>();

  const backPressHandler = () => {
    navigation.goBack();
  };

  const loginPressHandler = () => {
    navigation.navigate("Login");
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
            source={require("../assets/images/signup.png")}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4 ">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="John Snow"
            placeholder="Enter Full Name"
          />
          <Text className="text-gray-700 ml-4 ">Email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            value="john@email.com"
            placeholder="Enter Password"
          />
          <Text className="text-gray-700 ml-4 ">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            value="test12345"
            placeholder="Enter Password"
            secureTextEntry
          />
          <TouchableOpacity className="py-3 bg-violet-400 rounded-xl">
            <Text className="text-gray-700 font-xl font-bold text-center">
              Sign Up
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
            Already have an account?
          </Text>
          <TouchableOpacity onPress={loginPressHandler}>
            <Text className="font-semibold text-yellow-400">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
