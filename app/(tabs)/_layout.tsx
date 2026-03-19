import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";

export default function TabsLayout() {

    const { colors } = useTheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
                    height: 100,
                    paddingTop: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600"
                },
                headerShown: false
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Todos", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }} />

        </Tabs>
    )
}