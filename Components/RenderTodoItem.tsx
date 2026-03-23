import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import useTheme from "@/hooks/useTheme";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { createHomeStyles } from "@/assets/style/home.style";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';


type Todo = Doc<"todos">

export default function RenderTodoItem({ item }: { item: Todo }) {

    const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
    const [editText, setEditText] = useState("")

    const { colors } = useTheme()
    const homestyles = createHomeStyles(colors)
    const toogleTodo = useMutation(api.todos.toogleTodo)
    const deleteTodo = useMutation(api.todos.deleteTodo)
    const updateTodo = useMutation(api.todos.updateTodo)

    const handleToogleTodo = async (id: Id<"todos">) => {
        try {
            await toogleTodo({ id })
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Failed to toogle todo')
        }
    }

    const handleDeleteTodo = async (id: Id<"todos">) => {
        Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Delete", style: "destructive", onPress: async () => {
                    try {
                        await deleteTodo({ id })
                    } catch (error) {
                        console.log(error)
                        Alert.alert('Error', 'Failed to delete todo')
                    }
                }
            },

        ])
    }


    const handleEditTodo = (todo: Todo) => {
        setEditingId(todo._id)
        setEditText(todo.text)
    }

    const handleSaveEdit = async () => {
        if (editingId) {
            try {
                await updateTodo({ id: editingId, text: editText })
                setEditingId(null)
                setEditText("")
            } catch (error) {
                console.log(error)
                Alert.alert('Error', 'Failed to update todo')
            }
        }
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditText("")
    }

    const isEditing = editingId === item._id

    return (
        <View style={homestyles.todoItemWrapper}>
            <LinearGradient
                style={homestyles.todoItem}
                colors={colors.gradients.surface}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >

                <TouchableOpacity style={homestyles.checkbox} activeOpacity={0.7} onPress={() => handleToogleTodo(item._id)}>
                    <LinearGradient
                        colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
                        style={[homestyles.checkboxInner, { borderColor: item?.isCompleted ? "transparent" : colors.border }]}
                    >
                        {item?.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />}
                    </LinearGradient>

                </TouchableOpacity>

                {isEditing ? (
                    <View style={homestyles.editContainer}>
                        <TextInput 
                            style={homestyles.editInput}
                            placeholder="Edit your todo"
                            placeholderTextColor={colors.textMuted}
                            value={editText}
                            onChangeText={setEditText}
                            multiline
                        />
                        <View style={homestyles.editButtons}>
                            <TouchableOpacity onPress={handleSaveEdit} activeOpacity={0.8}>
                                <LinearGradient style={homestyles.editButton} colors={colors.gradients.success}>
                                    <Ionicons name='checkmark' size={16} color="#fff" />
                                    <Text style={homestyles.editButtonText}>Save</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8}>
                                <LinearGradient style={homestyles.editButton} colors={colors.gradients.muted}>
                                    <Ionicons name='close' size={16} color="#fff" />
                                    <Text style={homestyles.editButtonText}>Cancel</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={homestyles.todoTextContainer}>
                        <Text
                            style={[
                                homestyles.todoText,
                                item.isCompleted && {
                                    textDecorationLine: "line-through",
                                    color: colors.textMuted,
                                    opacity: 0.6
                                }
                            ]}
                        >
                            {item.text}
                        </Text>

                        <View style={homestyles.todoActions}>
                            <TouchableOpacity onPress={() => handleEditTodo(item)} activeOpacity={0.8}>
                                <LinearGradient style={homestyles.actionButton} colors={colors.gradients.warning}>
                                    <Ionicons name="pencil" size={14} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteTodo(item._id)} activeOpacity={0.8}>
                                <LinearGradient style={homestyles.actionButton} colors={colors.gradients.danger}>
                                    <Ionicons name="trash" size={14} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </LinearGradient>
        </View>
    )
}