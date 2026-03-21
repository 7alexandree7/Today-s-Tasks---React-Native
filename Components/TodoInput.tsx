import { View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/style/home.style'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

export default function TodoInput() {

    const { colors } = useTheme()
    const homestyles = createHomeStyles(colors)

    const [newTodo, setNewTodo] = useState('')
    const addTodo = useMutation(api.todos.addTodo)

    const handleAddTodo = async () => {
        if (newTodo.trim()) {
            try {
                await addTodo({ text: newTodo })
                setNewTodo("")
            } catch (error) {
                Alert.alert('Error', 'Failed to add todo')
            }
        }
    }

    return (
        <View style={homestyles.inputSection}>
            <View style={homestyles.inputWrapper}>
                <TextInput
                    style={homestyles.input}
                    placeholder='What needs to be done?'
                    placeholderTextColor={colors.textMuted}
                    value={newTodo}
                    onChangeText={setNewTodo}
                    onSubmitEditing={handleAddTodo}
                />
                <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
                    <LinearGradient
                        colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                        style={[homestyles.addButton, !newTodo.trim() && homestyles.addButtonDisabled]}
                    >
                        <Ionicons name='add' size={24} color={"#fff"} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}