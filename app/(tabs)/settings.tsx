import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/style/settings.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSettings from '@/Components/HeaderSettings'
import ProgressStats from '@/Components/ProgressStats'
import Preferences from '@/Components/Preferences'
import DangerZone from '@/Components/DangerZone'

export default function settings() {

  const { colors } = useTheme()
  const settingsStyles = createSettingsStyles(colors)

  return (
    <LinearGradient style={settingsStyles.container} colors={colors.gradients.background}>
      <SafeAreaView style={settingsStyles.safeArea}>
        <HeaderSettings />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={settingsStyles.content} style={settingsStyles.scrollView}>
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}