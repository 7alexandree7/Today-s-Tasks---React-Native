import { Text, View, TouchableOpacity, StatusBar, FlatList } from "react-native";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/style/home.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"
import HeaderTodos from "@/Components/HeaderTodos";
import TodoInput from "@/Components/TodoInput";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoadingSpinner from "@/Components/LoadingSpinner";
import RenderTodoItem from "@/Components/RenderTodoItem";
import EmptyState from "@/Components/EmptyState";


export default function Index() {

  const { colors } = useTheme()
  const homestyles = createHomeStyles(colors)
  const todos = useQuery(api.todos.getTodos)
  const isLoading = todos === undefined

  if (isLoading) return <LoadingSpinner />

  return (
    <LinearGradient style={homestyles.container} colors={colors.gradients.background}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homestyles.container}>
        <HeaderTodos />
        <TodoInput />

        <FlatList
          data={todos}
          renderItem={({item}) => <RenderTodoItem item={item} />}
          keyExtractor={(item) => item._id}
          style={homestyles.todoList}
          contentContainerStyle={homestyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
