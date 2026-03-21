import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/style/home.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"
import Header from "@/Components/Header";
import TodoInput from "@/Components/TodoInput";

export default function Index() {

  const { toogleDarkMode, colors } = useTheme()
  const homestyles = createHomeStyles(colors)

  return (
    <LinearGradient style={homestyles.container} colors={colors.gradients.background}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homestyles.container}>
        <Header />
        <TodoInput />
        <TouchableOpacity onPress={toogleDarkMode}>
          <Text>Toggle dark mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
