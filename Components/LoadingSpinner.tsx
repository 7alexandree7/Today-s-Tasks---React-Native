import React from 'react'
import { createHomeStyles } from "@/assets/style/home.style"
import { LinearGradient } from "expo-linear-gradient"
import { ActivityIndicator, Text, View } from "react-native"
import useTheme from '@/hooks/useTheme'

export default function LoadingSpinner() {

  const { colors } = useTheme()
  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient style={homeStyles.container} colors={colors.gradients.background}>
      <View style={homeStyles.loadingContainer}>
        <ActivityIndicator size={"large"} color={colors.primary} />
        <Text style={homeStyles.loadingText}>Loading your todos...</Text>
      </View>
    </LinearGradient>
  )
}