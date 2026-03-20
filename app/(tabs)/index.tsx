import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import useTheme from "@/hooks/useTheme";
import { ColorScheme } from "@/context/themeContext";

export default function Index() {

  const { toogleDarkMode, colors } = useTheme()
  const styles = createStyle(colors)

  return (
    <View style={styles.container}>
      <Text>Edit theme</Text>
      <TouchableOpacity onPress={toogleDarkMode}>
        <Text>Toggle dark mode</Text>
      </TouchableOpacity>
    </View>
  );
}


const createStyle = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      fontSize: 12
    }
  })

  return styles
}