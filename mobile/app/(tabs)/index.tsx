import { Text, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
     className="flex-1 items-center justify-center"
    >
      <Text className=" text-blue-500 font-bold text-2xl">Hello world</Text>
      
    </SafeAreaView>
  );
}
