import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";

export default function Index() {

  const { toogleDarkMode } = useTheme()

  const todos = useQuery(api.todos.getTodos)
  const addTodo = useMutation(api.todos.addTodo)

  return (
    <View style={styles.container}>
      <Text>Edit theme</Text>
      <TouchableOpacity onPress={toogleDarkMode}>
        <Text>Toggle dark mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "Walk the dog" })}>
        <Text>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});