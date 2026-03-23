import { createSettingsStyles } from '@/assets/style/settings.style'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'

export default function Preferences() {

    const [isAutoSync, setIsAutoSync] = useState(true)
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)
    const { colors, isDarkMode, toogleDarkMode } = useTheme()
    const settingsStyles = createSettingsStyles(colors)

    return (
        <LinearGradient style={settingsStyles.section} colors={colors.gradients.surface}>
            <Text style={settingsStyles.sectionTitle}>Preferences</Text>
            
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient style={settingsStyles.settingIcon} colors={colors.gradients.primary}>
                        <Ionicons name="moon" size={18} color="#fff" />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Dark Mode</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={toogleDarkMode}
                        thumbColor={"#fff"}
                        trackColor={{ false: colors.border, true: colors.primary }}
                        ios_backgroundColor={colors.border}
                    />
                </View>
            </View>

            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient style={settingsStyles.settingIcon} colors={colors.gradients.warning}>
                        <Ionicons name="notifications" size={18} color="#fff" />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Notifications</Text>
                    <Switch
                        value={isNotificationsEnabled}
                        onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
                        thumbColor={"#fff"}
                        trackColor={{ false: colors.border, true: colors.primary }}
                        ios_backgroundColor={colors.border}
                    />
                </View>
            </View>

            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient style={settingsStyles.settingIcon} colors={colors.gradients.success}>
                        <Ionicons name="moon" size={18} color="#fff" />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Auto Sync</Text>
                    <Switch
                        value={isAutoSync}
                        onValueChange={() => setIsAutoSync(!isAutoSync)}
                        thumbColor={"#fff"}
                        trackColor={{ false: colors.border, true: colors.success }}
                        ios_backgroundColor={colors.border}
                    />
                </View>
            </View>
        </LinearGradient>
    )
} 