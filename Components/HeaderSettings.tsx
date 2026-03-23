import useTheme from '@/hooks/useTheme'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { createSettingsStyles } from '@/assets/style/settings.style'

export default function HeaderSettings() {

    const { colors } = useTheme()
    const settingsStyles = createSettingsStyles(colors)

    return (
        <View style={settingsStyles.header}>
            <View style={settingsStyles.titleContainer}>
                <LinearGradient style={settingsStyles.iconContainer} colors={colors.gradients.primary}>
                    <Ionicons name="settings" size={28} color="#fff" />
                </LinearGradient>
                <Text style={settingsStyles.title}>Settings</Text>
            </View>
        </View>
    )
}