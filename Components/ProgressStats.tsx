import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/style/settings.style'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

export default function ProgressStats() {

  const { colors, isDarkMode, toogleDarkMode } = useTheme()
  const settingsStyles = createSettingsStyles(colors)
  const todos = useQuery(api.todos.getTodos)
  const totalTodos = todos ? todos.length : 0
  const completeTodos = todos ? todos?.filter((todo) => todo.isCompleted).length : 0
  const activeTodos = totalTodos - completeTodos

  return (
    <LinearGradient style={settingsStyles.section} colors={colors.gradients.surface}>
      <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyles.statsContainer}>

        <LinearGradient style={[settingsStyles.statCard, { borderLeftColor: colors.primary }]} colors={colors.gradients.background}>
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient style={settingsStyles.statIcon} colors={colors.gradients.primary}>
              <Ionicons name="list" size={20} color="#fff" />
            </LinearGradient>
          </View>
          <View>
            <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
            <Text style={settingsStyles.statLabel}>Total Todos</Text>
          </View>
        </LinearGradient>

        <LinearGradient style={[settingsStyles.statCard, { borderLeftColor: colors.success }]} colors={colors.gradients.background}>
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient style={settingsStyles.statIcon} colors={colors.gradients.success}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
            </LinearGradient>
          </View>
          <View>
            <Text style={settingsStyles.statNumber}>{completeTodos}</Text>
            <Text style={settingsStyles.statLabel}>Completed</Text>
          </View>
        </LinearGradient>

        <LinearGradient style={[settingsStyles.statCard, { borderLeftColor: colors.warning }]} colors={colors.gradients.background}>
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient style={settingsStyles.statIcon} colors={colors.gradients.warning}>
              <Ionicons name="time" size={20} color="#fff" />
            </LinearGradient>
          </View>
          <View>
            <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
            <Text style={settingsStyles.statLabel}>Active</Text>
          </View>
        </LinearGradient>

      </View>
    </LinearGradient>
  )
}