import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/style/home.style'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'


const Header = () => {

    const { colors } = useTheme()
    const homestyles = createHomeStyles(colors)
    const todos = useQuery(api.todos.getTodos)

    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0
    const totalCount = todos ? todos.length : 0
    const progressPercentage = totalCount > 0 ? (completedTodos / totalCount) * 100 : 0

    return (
        <View style={homestyles.header}>
            <View style={homestyles.titleContainer}>
                <LinearGradient style={homestyles.iconContainer} colors={colors.gradients.primary}>
                    <Ionicons name='flash-outline' size={28} color={"#fff"} />
                </LinearGradient>

                <View style={homestyles.titleTextContainer}>
                    <Text style={homestyles.title}>Today&apos;s Tasks 👀</Text>
                    <Text style={homestyles.subtitle}>{completedTodos} of {totalCount} completed</Text>
                </View>
            </View>



            <View style={homestyles.progressContainer}>
                <View style={homestyles.progressBarContainer}>
                    <View style={homestyles.progressBar}>
                        <LinearGradient style={[homestyles.progressFill, { width: `${progressPercentage}%` }]} colors={colors.gradients.success} />
                    </View>
                    <Text style={homestyles.progressText}>{Math.round(progressPercentage)}%</Text>
                </View>
            </View>


        </View>
    )
}

export default Header